import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import "./IndustrialMetricsIntro.css";

const IndustrialMetricsIntro = ({
  breadcrumbLinks,
  title,
  description,
  buttonText,
  buttonIcon,
  toLink,
  backgroundImage,
  backgroundPosition,
}) => {
  return (
    <div
      className="industrial-variables-container"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(
              to top, rgba(33, 33, 33, 1), rgba(33, 33, 33, 0.8), rgba(23, 42, 79, 0.5)
            ), url("${backgroundImage}")`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition,
        width: "100%",
        marginTop: "3%",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Breadcrumb */}
      <div className="breadcrumb">
        {breadcrumbLinks.map((link, index) => (
          <React.Fragment key={index}>
            <Link to={link.to} className={`breadcrumb-link ${link.active ? "active" : ""}`}>
              {link.label}
            </Link>
            {index < breadcrumbLinks.length - 1 && (
              <img
                className="breadcrumb-separator"
                src="/00-Buttons, Dropdowns & Questions/arrow_forward_ios_white.svg"
                alt="separator"
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Content */}
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <Button to={toLink}>
          {buttonText}
          {buttonIcon && <img src={buttonIcon} alt="icon" />}
        </Button>
      </div>
    </div>
  );
};

export default IndustrialMetricsIntro;
