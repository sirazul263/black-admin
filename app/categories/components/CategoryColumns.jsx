import { format } from "date-fns";
import { Form } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

export const COLUMNS = [
  {
    Header: "SKU",
    Footer: "SKU",
    accessor: "id",
    disableSortBy: true,
    sticky: "left",
    style: { overflow: "visible", minWidth: 250 },
    Cell: (props) => {
      return <span>1E2C47</span>;
    },
  },
  {
    Header: "ICON",
    Footer: "ICON",
    accessor: "created_at",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <div>
          <img
            src="../img/table-product.svg"
            alt="logo"
            className="img-fluid"
          />
        </div>
      );
    },
  },
  {
    Header: "CATEGORY NAME",
    Footer: "CATEGORY NAME",
    accessor: "full_name",
    disableSortBy: true,
    sticky: "left",
  },

  {
    Header: "SUBCATEGORY",
    Footer: "SUBCATEGORY",
    accessor: "phone",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      const { row, setShowModal, setSelected } = props;
      const handleUpdate = () => {
        setShowModal(true);
        setSelected(row.original);
      };
      let iconStyles = { color: "#C4C4C4", fontSize: 20 };
      return (
        <div className="d-flex  align-items-center">
          <div>Bag</div>
          <div
            className="text-muted cursor-pointer ms-5"
            onClick={handleUpdate}
          >
            <FaEdit style={iconStyles} />
          </div>
        </div>
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
      let iconStyles = { color: "#C4C4C4", fontSize: 20 };
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