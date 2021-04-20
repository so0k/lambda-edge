build/%:
	build.sh $*

test/%:
	cd $*;yarn run jest

clean:
	rm -rf out
	rm -rf temp
