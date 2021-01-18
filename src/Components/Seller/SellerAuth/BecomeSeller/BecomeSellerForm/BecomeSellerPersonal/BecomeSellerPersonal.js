import React, { useEffect } from "react";
import styles from "./BecomeSellerPersonal.module.css";
import { Select } from "antd";
import csc from "country-state-city";
import Lottie from "lottie-react-web";
import spinner from "../../../../../../lottie/ios-loader.json";

const { Option } = Select;

function BecomeSellerPersonal({
  address,
  setAddress,
  businessLogic,
  country,
  setCountry,
  region,
  setRegion,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  city,
  setCity,
  zip,
  setZip,
  processing,
  error,
}) {
  function onChange(value) {
    console.log(`selected ${value}`);
    setCountry(value);
  }

  function regionChange(val) {
    setRegion(val);
  }

  useEffect(() => {
    console.log("This is country -->", country, "This is state", region);
  }, [country, region]);

  const moveToNext = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const inputs = Array.prototype.slice.call(
        document.querySelectorAll("input")
      );
      const index =
        (inputs.indexOf(document.activeElement) + 1) % inputs.length;
      const input = inputs[index];
      input.focus();
      input.select();
    }
  };

  return (
    <div className={styles.become_seller_personal}>
      <div className={styles.input_div}>
        <input
          onKeyDown={moveToNext}
          className={styles.seller_input}
          type="text"
          value={firstName}
          placeholder={"first-name"}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className={styles.input_div}>
        <input
          onKeyDown={moveToNext}
          className={styles.seller_input}
          type="text"
          placeholder={"last-name"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className={styles.input_div}>
        <Select
          className={styles.input_select}
          showSearch
          placeholder="select a country"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {csc.getAllCountries().map((country) => {
            return (
              <Option key={country.id} value={country.id}>
                {country.name}
              </Option>
            );
          })}
        </Select>
      </div>

      <div className={styles.input_div}>
        {country !== "" && (
          <>
            <Select
              className={styles.input_select}
              showSearch
              placeholder="select a state"
              optionFilterProp="children"
              onChange={regionChange}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {csc.getStatesOfCountry(country).map((state) => {
                return (
                  <Option key={state.id} value={state.name}>
                    {state.name}
                  </Option>
                );
              })}
            </Select>
          </>
        )}

        {region !== "" && (
          <div>
            <div className={styles.input_div}>
              <input
                onKeyDown={moveToNext}
                className={styles.seller_input}
                type="text"
                placeholder={"city"}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className={styles.input_div}>
              <input
                onKeyDown={moveToNext}
                className={styles.seller_input}
                type="text"
                placeholder={"address"}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className={styles.input_div}>
              <input
                className={styles.seller_input}
                type="text"
                placeholder={"zip"}
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      <p className={styles.error}>{error}</p>

      <button
        onClick={(e) => {
          e.preventDefault();
          businessLogic();
        }}
        type="submit"
        className={styles.continue_button}
      >
        {processing ? (
          <div
            className={styles.spinner}
            style={{ background: processing && "rgba(255,153,0, 0.3)" }}
          >
            <Lottie options={{ animationData: spinner }} />
          </div>
        ) : (
          "Continue"
        )}
      </button>
    </div>
  );
}

export default BecomeSellerPersonal;
