import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
} from "@/base-components";
import logoUrl from "@/assets/images/logo.svg";
import { faker as $f } from "@/utils";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userToken, isAuthenticated } from "@/stores/auth";
import { showNotification } from "../notification";
import IconButton from "@mui/material/IconButton";

const VenueSelect = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  let options = user.associated_venueid.venueid;
  options.map((value) => {
    value.checked = false;
    value.venues.map((venue) => {
      venue.checked = false;
    });
  });

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [venuelist, setVenuelist] = useState(options);
  const [label, setLabel] = useState("");

  const onGroupStateChange = (groupIndex, state) => {
    let group = venuelist[groupIndex];
    group.checked = state;
    group.venues.map((val, index) => (val.checked = state));
    setVenuelist([
      ...venuelist.slice(0, groupIndex),
      group,
      ...venuelist.slice(groupIndex + 1),
    ]);
  };

  const onVenueStateChange = (groupIndex, venueIndex, state) => {
    let group = venuelist[groupIndex];
    group.venues[venueIndex].checked = state;

    let _gState = true;
    group.venues.map((val) => {
      if (val.checked === false) {
        group.checked = false;
        _gState = false;
        setIsAllChecked(false);
      }
    });
    group.checked = _gState;

    setVenuelist([
      ...venuelist.slice(0, groupIndex),
      group,
      ...venuelist.slice(groupIndex + 1),
    ]);
  };

  const changeStateAll = (state) => {
    let _venuelist = venuelist;
    _venuelist.map((value) => {
      value.checked = state;
      value.venues.map((venue) => {
        venue.checked = state;
      });
    });
    setVenuelist([..._venuelist]);
  };

  useEffect(() => {
    let state = true;
    let selected = 0;
    let label = "";
    venuelist.map((group) => {
      if (group.checked === false) {
        state = false;
      }
      group.venues.map((venue) => {
        if (venue.checked === false) {
          state = false;
        } else {
          selected += 1;
          label = venue.venue_name;
        }
      });
    });
    setIsAllChecked(state);
    if (selected > 1) {
      label = selected + " venues";
    }
    setLabel(label);
  }, [venuelist]);

  return (
    <>
      <DropdownToggle tag="div" role="button" className="zoom-in">
        <div className="flex">
          <Lucide
            icon="PlusCircle"
            className="w-8 h-8 text-white mr-2"
          ></Lucide>
          <label className="text-white m-auto">{label}</label>
        </div>
      </DropdownToggle>
      <DropdownMenu className="w-[240px]">
        <DropdownContent className="">
          <DropdownHeader
            tag="div"
            className="!font-normal ml-[-10px] mr-[-10px]"
          >
            <input
              id="checkall"
              className="form-check-input mr-3 ml-3"
              type="checkbox"
              checked={isAllChecked}
              onChange={(e) => {
                setIsAllChecked(e.target.checked);
                changeStateAll(e.target.checked);
              }}
            />
            <label
              htmlFor="checkall"
              className="form-check-label ml-0 font-bold"
            >
              ALL LOCAIONS
            </label>
          </DropdownHeader>

          {venuelist.map((value, index) => {
            return (
              <div key={"key-" + index}>
                {/* <DropdownDivider className="" /> */}
                <DropdownItem
                  className="ml-[-10px] mr-[-10px] bg-slate-300 rounded-none"
                  key={"key-" + index}
                >
                  <input
                    id={"group-" + index}
                    className="form-check-input mr-3 ml-3"
                    type="checkbox"
                    checked={value.checked}
                    onChange={(e) => {
                      onGroupStateChange(index, e.target.checked);
                    }}
                  />
                  <label
                    className="form-check-label ml-0 font-bold"
                    htmlFor={"group-" + index}
                  >
                    {value.group}
                  </label>
                </DropdownItem>
                {value.venues.map((venue, v_index) => {
                  return (
                    <DropdownItem className="" key={"key-" + v_index}>
                      <input
                        id={"venue-" + index + "-" + v_index}
                        className="form-check-input mr-3 ml-3"
                        type="checkbox"
                        checked={venue.checked}
                        onChange={(e) => {
                          onVenueStateChange(index, v_index, e.target.checked);
                        }}
                      />
                      <label
                        className="form-check-label ml-0"
                        htmlFor={"venue-" + index + "-" + v_index}
                      >
                        {venue.venue_name}
                      </label>
                    </DropdownItem>
                  );
                })}
              </div>
            );
          })}
        </DropdownContent>
      </DropdownMenu>
    </>
  );
};

function Main(props) {
  const [searchDropdown, setSearchDropdown] = useState(false);
  const showSearchDropdown = () => {
    setSearchDropdown(true);
  };
  const hideSearchDropdown = () => {
    setSearchDropdown(false);
  };
  const changeLabel = (_label) => {
    setVenueLabel(_label);
  };

  const navigateTo = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [, setToken] = useRecoilState(userToken);
  const [, setAuthenticated] = useRecoilState(isAuthenticated);
  const [venueLabel, setVenueLabel] = useState("");

  return (
    <>
      {/* BEGIN: Top Bar */}
      <div
        className={`${props.className} top-bar-boxed h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700`}
      >
        <div className="h-full flex items-center">
          {/* BEGIN: Logo */}
          <Link
            to="/"
            className="logo -intro-x hidden md:flex xl:w-[180px] block"
          >
            <img
              alt="Enigma Tailwind HTML Admin Template"
              className="logo__image w-6"
              src={logoUrl}
            />
            <span className="logo__text text-white text-lg ml-3">
              {" "}
              mySTOVE{" "}
            </span>
          </Link>
          {/* END: Logo */}

          <Dropdown className="-intro-x mr-auto">
            <VenueSelect onChangeLabel={changeLabel} />
          </Dropdown>

          <div className="z-50 flex mr-10">
            <div className="form-check form-switch mr-3">
              <input
                id="theme-switcher"
                className="form-check-input border-slate-50"
                type="checkbox"
                onChange={(e) => {
                  props.onSwitch(e.target.checked);
                }}
              />
            </div>
            <label
              htmlFor="input-wizard-1"
              className="form-label m-auto text-white"
            >
              Theme Switcher
            </label>
          </div>

          {/* BEGIN: Account Menu */}
          <Dropdown className="intro-x w-8 h-8">
            <DropdownToggle
              tag="div"
              role="button"
              className="w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
            >
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={$f()[9].photos[0]}
              />
            </DropdownToggle>
            <DropdownMenu className="w-56">
              <DropdownContent className="bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white">
                <DropdownHeader tag="div" className="!font-normal">
                  <div className="font-medium">{$f()[0].users[0].name}</div>
                  <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                    {$f()[0].jobs[0]}
                  </div>
                </DropdownHeader>
                <DropdownDivider className="border-white/[0.08]" />
                <DropdownItem className="hover:bg-white/5">
                  <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
                </DropdownItem>
                <DropdownItem className="hover:bg-white/5">
                  <Lucide icon="Edit" className="w-4 h-4 mr-2" /> Add Account
                </DropdownItem>
                <DropdownItem className="hover:bg-white/5">
                  <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Reset Password
                </DropdownItem>
                <DropdownItem className="hover:bg-white/5">
                  <Lucide icon="HelpCircle" className="w-4 h-4 mr-2" /> Help
                </DropdownItem>
                <DropdownDivider className="border-white/[0.08]" />
                <DropdownItem
                  className="hover:bg-white/5"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    localStorage.removeItem("isAuthenticated");
                    localStorage.removeItem("logintime");
                    setToken(() => null);
                    setAuthenticated(() => null);
                    showNotification("success", "Success", "Logout Success");
                    navigateTo("/login");
                  }}
                >
                  <Lucide icon="ToggleRight" className="w-4 h-4 mr-2" /> Logout
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
          {/* END: Account Menu */}
        </div>
      </div>
      {/* END: Top Bar */}
    </>
  );
}

Main.propTypes = {
  className: PropTypes.string,
};

Main.defaultProps = {
  className: "",
};

export default Main;
