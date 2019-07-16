build: clean
	npx tsc -b packages/you-app
	@echo "build successfully 👏"

clean:
	rm -rf packages/you-app/lib
	rm -rf packages/you-kit/lib
	rm -rf packages/you-ui/lib
	@echo "clean successfully 👏"

watch: clean
	npx tsc -b packages/you-app -w
