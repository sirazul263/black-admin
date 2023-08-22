import { format } from "date-fns";
import { Form } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

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
            c4556
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
  },
  {
    Header: "PRODUCT LIST",
    Footer: "PRODUCT LIST",
    accessor: "full_name",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <div className="d-flex justify-content-center me-4">
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
    accessor: "phone",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <div className="d-flex align-items-center">
          <div>
            <img src="../img/campaign.svg" alt="logo" className="img-fluid" />
          </div>
          <p className="ms-2 fw-bold mb-0">Free day</p>
        </div>
      );
    },
  },
  {
    Header: "PROMO CODE",
    Footer: "PROMO CODE",
    accessor: "address",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <span className="fw-bold">BLACK30</span>;
    },
  },

  {
    Header: "TOTAL DISCOUNT",
    Footer: "TOTAL DISCOUNT",
    accessor: "products",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <div className="fw-bold d-flex justify-content-center me-4">20%</div>
      );
    },
  },
  {
    Header: "PUBLISHED",
    Footer: "PUBLISHED",
    accessor: "price",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <div>
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              className="fs-16"
            />
          </Form>
        </div>
      );
    },
  },
  {
    Header: "START DATE",
    Footer: "START DATE",
    accessor: "sell",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <div>Wed, Jun 24, 2021 4:00PM</div>;
    },
  },
  {
    Header: "END DATE",
    Footer: "END DATE",
    accessor: "stock",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <div>Wed, Jun 24, 2021 4:00PM</div>;
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
        <div
          className="radius-8 text-danger px-2 py-1 fs-10"
          style={{ backgroundColor: "rgba(214, 44, 44, 0.16)" }}
        >
          Expired
        </div>
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
      const { row, setShowModal, setSelected } = props;
      const handleUpdate = () => {
        setShowModal(true);
        setSelected(row.original);
      };
      let iconStyles = { color: "#C4C4C4", fontSize: 16 };
      return (
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-muted cursor-pointer" onClick={handleUpdate}>
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
