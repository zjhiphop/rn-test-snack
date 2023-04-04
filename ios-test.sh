#!/bin/bash
# https://firebase.google.com/docs/test-lab/ios/run-xctest?authuser=0#workspace

xcodebuild -workspace ios/InSeadApp.xcworkspace \
-scheme InseadApp \
-derivedDataPath ios/InSeadAppSpecs \
-sdk iphoneos build-for-testing

cd ios/InSeadAppSpecs/Build/Products : \
zip -r MyTests.zip Debug-iphoneos InSeadApp_iphoneos16.2-arm64.xctestrun

# Run test locally
# xcodebuild test-without-building \
#     -xctestrun "Derived Data/Build/Products/InSeadApp.xctestrun" \
#     -destination id=your-phone-id