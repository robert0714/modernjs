/* @flow */

import React from "react";
import TestRenderer from "react-test-renderer";

import { CountrySelect } from "./countrySelect.component";

describe("CountrySelect", () => {
    it("renders correctly when loading, with no countries", () => {
        const tree = TestRenderer.create(
            <CountrySelect
                deviceData={{
                    isTablet: false,
                    isPortrait: true,
                    height: 1000,
                    width: 720,
                    scale: 1,
                    fontScale: 1
                }}
                loading={true}
                currentCountry={""}
                onSelect={() => null}
                getCountries={() => null}
                list={[]}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correctly a countries dropdown", () => {
        const tree = TestRenderer.create(
            <CountrySelect
                deviceData={{
                    isTablet: false,
                    isPortrait: true,
                    height: 1000,
                    width: 720,
                    scale: 1,
                    fontScale: 1
                }}
                currentCountry={""}
                loading={false}
                onSelect={() => null}
                getCountries={() => null}
                list={[
                    {
                        countryCode: "UY",
                        countryName: "Uruguay"
                    },
                    {
                        countryCode: "AR",
                        countryName: "Argentina"
                    },
                    {
                        countryCode: "BR",
                        countryName: "Brazil"
                    }
                ]}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
