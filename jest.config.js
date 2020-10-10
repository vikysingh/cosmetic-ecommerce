//import register from 'ignore-styles';
module.exports = {
    "setupFiles": [
        "<rootDir>/src/test_files/setupTests.js"
    ],
    "moduleNameMapper": {
        "\\.(css|less|scss|sss|styl|jpg|png|jpeg)$": "<rootDir>/node_modules/jest-css-modules"
    },
    "snapshotSerializers":  [
        "enzyme-to-json/serializer"
    ],
    "testPathIgnorePatterns": [
            "<rootDir>/src/__tests__/redux",
            "<rootDir>/src/__tests__/components/Home",
            "<rootDir>/src/__tests__/components/Contact"
        ]
}