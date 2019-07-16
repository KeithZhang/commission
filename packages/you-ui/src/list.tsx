import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from 'react-native';
import { http } from 'you-kit';
import { YouLoading } from '.';

export interface IYListProps {
  url?: string;
  searchParams?: Object;
  data?: Array<any>;
  pageSize?: number;
  renderHeader?: Function;
  renderItem: (info: any) => React.ReactElement<any> | null;
  keyExtractor?: (item: Object, index) => any;
  onDataChange?: (data) => void;
}

export interface IYListState {
  refreshing: boolean;
  loadingMore: boolean;
  isFirstLoading: boolean;
  data: Array<any>;
}

class ListItemWrapper extends React.PureComponent {
  render() {
    return React.Children.only(this.props.children);
  }
}

export default class YouList extends React.Component<IYListProps, IYListState> {
  static ListItemWrapper = ListItemWrapper;

  static defaultProps = {
    data: [],
    pageSize: 10,
    searchParams: {},
    onDataChange: data => {},
    renderHeader: () => null,
    renderItem: () => null,
    keyExtractor: item => item.id
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      isFirstLoading: true,
      loadingMore: false,
      data: props.data || []
    };
  }

  page: number = 0;

  componentWillReceiveProps(nextProps: IYListProps) {
    if (nextProps.data != this.props.data) {
      this.setState({
        data: nextProps.data
      });
    }
  }

  componentDidMount() {
    this._handleEndReached();
  }

  render() {
    //show loading..
    if (this.state.isFirstLoading) {
      return <YouLoading />;
    }

    //compute refreshing props
    let refresingProps = {};
    if (this.props.url) {
      refresingProps = {
        onEndReachedThreshold: 0.8,
        refreshing: this.state.refreshing,
        onRefresh: this._handleOnRefreshing,
        onEndReached: this._handleEndReached
      };
    }

    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.props.keyExtractor}
          data={this.state.data}
          //@ts-ignore
          ListHeaderComponent={this.props.renderHeader}
          renderItem={this.props.renderItem}
          ListEmptyComponent={this._renderEmpty}
          ListFooterComponent={this._renderFooter}
          {...refresingProps}
        />
      </View>
    );
  }

  _renderSeperator() {
    return <View style={styles.seperator} />;
  }

  _renderEmpty() {
    return (
      <View>
        <Text>Oops, No data</Text>
      </View>
    );
  }

  _renderFooter = () => {
    const { data, loadingMore } = this.state;
    if (data.length === 0 || loadingMore) {
      return null;
    }
    return (
      <View style={styles.foot}>
        <ActivityIndicator animating size="small" />
        <Text>拼命加载更多...</Text>
      </View>
    );
  };

  _handleEndReached = async () => {
    const url = this.props.url;
    if (!url) {
      return;
    }

    //如果当前正在fetch
    if (this.state.loadingMore) {
      return;
    }

    if (!this.state.isFirstLoading) {
      //show loading more
      this.setState({
        loadingMore: true
      });
    }

    const { pageSize, searchParams } = this.props;

    const { res, err } = await http.post<Array<any>>(url, {
      page: this.page++,
      size: pageSize,
      ...searchParams
    });

    if (err) {
      //alert
      return;
    }

    this.setState(
      {
        data: [...this.state.data, ...res],
        loadingMore: false,
        isFirstLoading: false
      },
      () => {
        this.props.onDataChange(this.state.data);
      }
    );
  };

  _handleOnRefreshing = async () => {
    this.setState({
      refreshing: true
    });

    //reset pageNum
    this.page = 0;
    const { pageSize, url, searchParams } = this.props;

    const { res, err } = await http.post<Array<any>>(url, {
      page: this.page++,
      size: pageSize,
      ...searchParams
    });

    if (err) {
      //tip
      return;
    }

    this.setState(
      {
        data: res,
        refreshing: false
      },
      () => {
        this.props.onDataChange(this.state.data);
      }
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F8F8F8'
  } as ViewStyle,
  seperator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#F0F0F0',
    width: '100%'
  },
  foot: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE'
  }
});
