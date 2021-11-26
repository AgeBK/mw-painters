import React from "react";
import {
  faCheckCircle,
  // faChevronDown,
  // faWrench,
  faMedal,
  faHome,
  faBuilding,
  faUserFriends,
  faCertificate,
  faClock,
  faAward,
  faStar,
  faPeopleArrows,
  faCommentDollar,
  faDollarSign,
  faTrophy,
  faPaintRoller,
  faBrush,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./IconMapping.module.css";

var arr = [
  { title: "Over 25 years experience", icon: faMedal },
  { title: "Interior and exterior", icon: faHome },
  { title: "Commercial, residential", icon: faBuilding },
  { title: "Reliable and honest", icon: faUserFriends },
  { title: "Licensed and insured", icon: faCertificate },
  { title: "Timely completion", icon: faClock },
  { title: "Expert colour advice", icon: faAward },
  { title: "Satisfaction gaurantee", icon: faStar },
  { title: "Personalised service", icon: faPeopleArrows },
  { title: "Value for money", icon: faCommentDollar },
  { title: "Fixed price", icon: faDollarSign },
  { title: "Best products available", icon: faTrophy },
];

arr.map((val) => console.log(val.icon + ", "));

// const Aboutus = () => {
//   var arr = [
//     { title: "Over 25 years experience", icon: faMedal },
//     { title: "Interior and exterior", icon: faHome },
//     { title: "Commercial, residential", icon: faBuilding },
//     { title: "Reliable and honest", icon: faUserFriends },
//     { title: "Licensed and insured", icon: faCertificate },
//     { title: "Timely completion", icon: faClock },
//     { title: "Expert colour advice", icon: faAward },
//     { title: "Satisfaction gaurantee", icon: faStar },
//     { title: "Personalised service", icon: faPeopleArrows },
//     { title: "Value for money", icon: faCommentDollar },
//     { title: "Fixed price", icon: faDollarSign },
//     { title: "Best products available", icon: faTrophy },
//   ];

export default {
  faCheckCircle: <FontAwesomeIcon icon={faCheckCircle} />,
  faMedal: <FontAwesomeIcon icon={faMedal} />,
  faHome: <FontAwesomeIcon icon={faHome} />,
  faBuilding: <FontAwesomeIcon icon={faBuilding} />,
  faUserFriends: <FontAwesomeIcon icon={faUserFriends} />,
  faCertificate: <FontAwesomeIcon icon={faCertificate} />,
  faClock: <FontAwesomeIcon icon={faClock} />,
  faAward: <FontAwesomeIcon icon={faAward} />,
  faStar: <FontAwesomeIcon icon={faStar} />,
  faPeopleArrows: <FontAwesomeIcon icon={faPeopleArrows} />,
  faCommentDollar: <FontAwesomeIcon icon={faCommentDollar} />,
  faDollarSign: <FontAwesomeIcon icon={faDollarSign} />,
  faTrophy: <FontAwesomeIcon icon={faTrophy} />,
  faPaintRoller: <FontAwesomeIcon icon={faPaintRoller} />,
  faBrush: <FontAwesomeIcon icon={faBrush} />,
};
