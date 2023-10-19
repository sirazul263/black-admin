import { capitalizeFirstLetter } from "@/helpers/Functions";
import { updateOffer } from "@/services/offerServices";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

export const COLUMNS = [
  {
    Header: "CAMPAIGN ID",
    Footer: "CAMPAIGN ID",
    accessor: "id",
    disableSortBy: true,
    sticky: "left",
    style: { overflow: "visible", minWidth: 250 },
    Cell: (props) => {
      return (
        <div className="remember-me">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember"
            id="remember-me"
          />
          <label
            className="form-check-label fs-14 text-clr-purple-light fw-semi-bold ms-2"
            htmlFor="remember-me"
          >
            c{props.value}
          </label>
        </div>
      );
    },
  },
  {
    Header: "CREATED ON",
    Footer: "CREATED ON",
    accessor: "created_at",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <span>
          {format(new Date(props.value), "EEE, MMM dd, yyyy hh:mm:ss a")}
        </span>
      );
    },
  },
  {
    Header: "PRODUCT LIST",
    Footer: "PRODUCT LIST",
    accessor: "full_name",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      const { setSelected, setShowModal, row } = props;
      const handleSubmit = () => {
        setSelected(row.original.products);
        setShowModal(true);
      };
      return (
        <div
          className="d-flex justify-content-center me-4"
          onClick={handleSubmit}
        >
          <AiOutlineEye
            size={20}
            color={"#C4C4C4"}
            className="cursor-pointer"
          />
        </div>
      );
    },
  },

  {
    Header: "CAMPAIGN NAME",
    Footer: "CAMPAIGN NAME",
    accessor: "campaign_name",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      const image = props.row.original.banner_image;
      return (
        <div className="d-flex align-items-center">
          <div>
            <img
              src={image ? image : "../img/campaign.svg"}
              alt="logo"
              style={{ height: 35, width: 80, borderRadius: 5 }}
            />
          </div>
          <p className="ms-2 fw-bold mb-0">{props.value}</p>
        </div>
      );
    },
  },
  {
    Header: "PROMO CODE",
    Footer: "PROMO CODE",
    accessor: "promo_code",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <span className="fw-bold">{props.value.toUpperCase()}</span>;
    },
  },

  {
    Header: "TOTAL DISCOUNT",
    Footer: "TOTAL DISCOUNT",
    accessor: "discount",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      const discount_type =
        props.row.original.discount_type === "amount" ? "৳" : "%";
      return (
        <div className="fw-bold d-flex justify-content-center me-4">
          {discount_type === "৳" && "৳"} {props.value}
          {discount_type === "%" && "%"}
        </div>
      );
    },
  },
  {
    Header: "PUBLISHED",
    Footer: "PUBLISHED",
    accessor: "published",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      const { row, updated, setUpdated, token } = props;
      const data = row.original;
      const [loading, setLoading] = useState(false);
      const handleChange = async () => {
        const form = {
          published: data.published === 1 ? 0 : 1,
        };
        const res = await updateOffer(form, token, data.id, setLoading);
        if (!res.hasOwnProperty("errors")) {
          setUpdated(!updated);
          toast.success("Offer updated successfully", {
            autoClose: 200,
          });
        } else {
          toast.error("Failed to update offer", {
            autoClose: 200,
          });
        }
      };
      return (
        <div>
          {loading ? (
            <p>Loading....</p>
          ) : (
            <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                className="fs-16"
                checked={props.value === 1 ? true : false}
                onChange={handleChange}
              />
            </Form>
          )}
        </div>
      );
    },
  },
  {
    Header: "START DATE",
    Footer: "START DATE",
    accessor: "valid_from",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <span>
          {format(
            new Date(props.value.split(" ")[0]),
            "EEE, MMM dd, yyyy hh:mm:ss a"
          )}
        </span>
      );
    },
  },
  {
    Header: "END DATE",
    Footer: "END DATE",
    accessor: "valid_to",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <div>
          {format(
            new Date(props.value.split(" ")[0]),
            "EEE, MMM dd, yyyy hh:mm:ss a"
          )}
        </div>
      );
    },
  },
  {
    Header: "STATUS",
    Footer: "STATUS",
    accessor: "status",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <>
          {props.value == "expired" && (
            <div
              className="radius-8 text-danger px-2 py-1 fs-10"
              style={{ backgroundColor: "rgba(214, 44, 44, 0.16)" }}
            >
              Expired
            </div>
          )}
          {props.value == "active" && (
            <div className="radius-8 text-white px-2 py-1 fs-10 bg-success">
              Active
            </div>
          )}
        </>
      );
    },
  },

  {
    Header: "ACTION",
    Footer: "ACTION",
    accessor: "trip_request_id",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      const { row } = props;
      const router = useRouter();

      let iconStyles = { color: "#C4C4C4", fontSize: 16 };
      return (
        <div className="d-flex justify-content-between align-items-center">
          <div
            className="text-muted cursor-pointer"
            onClick={() =>
              router.push(`/offers/add-offer?id=${row.original.id}`)
            }
          >
            <FaEdit style={iconStyles} />
          </div>
          <div>
            <FiTrash2 style={iconStyles} />
          </div>
        </div>
      );
    },
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
