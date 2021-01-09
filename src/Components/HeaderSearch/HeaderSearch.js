import React, { useEffect, useState } from "react";
import styles from "./HeaderSearch.module.css";
import { Select, MenuItem } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Hit from "./Hit";
import { productIndex } from "../../algolia/algolia";
import { useStateValue } from "../../ContextApi/StateProvider";
import {
  setHits,
  setSearchText,
  setShowAutoComplete,
} from "../../ContextApi/actions";
import { useRouter } from "next/router";

function HeaderSearch() {
  const [selectedValue, setSelectedValue] = useState("All");
  const [placeHolder, setPlaceHolder] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);

  const [{ hits, showAutoComplete, searchText }, dispatch] = useStateValue();

  const router = useRouter();

  useEffect(() => {
    if (window.outerWidth <= 450) {
      setPlaceHolder("Search Amazon");
    }
  }, []);

  function handleChange(value) {
    setSelectedValue(value);
    console.log(`selected ${value}`);
  }

  const onSearchChange = (event) => {
    dispatch(setSearchText(event.target.value));

    setSelectedItem(0);

    dispatch(setShowAutoComplete(true));

    if (!(event.target.value === "")) {
      productIndex
        .search(event.target.value, {
          facets: ["productName", "brand", "shortDescription"],
          length: 10,
          typoTolerance: "min",
        })
        .then((foundProducts) => {
          const hits = foundProducts.hits;

          dispatch(setHits(hits));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleOptionSelection = (event) => {
    const length = hits.length; //3

    if (event.key === "Enter") {
      console.log("enter");

      dispatch(setShowAutoComplete(false));

      moveToSearch("app");
      //move to search page with the query
    } else if (event.keyCode == 38) {
      //do up stuff
      if (selectedItem === 0) {
        //move guy to down
        setSelectedItem(length);
      } else if (selectedItem === 1) {
        //he is up again move down
        setSelectedItem(length);
      } else {
        //he is down move up
        setSelectedItem(selectedItem - 1);
      }
    } else if (event.keyCode == 40) {
      // do down stuff

      if (selectedItem === 0) {
        //move guy to down he is up
        setSelectedItem(selectedItem + 1);
      } else if (selectedItem === length) {
        //he is down again move up
        setSelectedItem(1);
      } else {
        //he is up move down
        setSelectedItem(selectedItem + 1);
      }
    }
  };

  const moveToSearch = (event) => {
    router.push(`/search?q=${searchText}`);
  };

  return (
    <div className={styles.header_search_container}>
      <div className={styles.header_search}>
        <Select
          className={styles.header_search_select}
          value={selectedValue}
          onChange={handleChange}
        >
          <MenuItem value={"All"}>All</MenuItem>
        </Select>

        <div className={styles.auto_container}>
          <div className={styles.input_container}>
            <input
              onKeyDown={handleOptionSelection}
              value={searchText}
              onChange={onSearchChange}
              type="text"
              className={styles.header_input_search}
              placeholder={placeHolder}
            />

            <SearchIcon
              className={styles.header_search_logo}
              onClick={moveToSearch}
            />
          </div>

          {showAutoComplete && (
            <div className={styles.hits}>
              {hits?.map((hit, index) => {
                return (
                  <Hit
                    key={index}
                    displayText={hit?.name}
                    index={index}
                    selectedItem={selectedItem}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderSearch;
