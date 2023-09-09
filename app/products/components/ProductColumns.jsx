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
      return <span>{props.value}</span>;
    },
  },
  {
    Header: "IMAGE",
    Footer: "IMAGE",
    accessor: "image_urls",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <div>
          <img
            src={props.value[0]}
            alt="logo"
            className="img-fluid"
            style={{ maxHeight: 35, width: 40 }}
          />
        </div>
      );
    },
  },
  {
    Header: "PRODUCT NAME",
    Footer: "PRODUCT NAME",
    accessor: "name",
    disableSortBy: true,
    sticky: "left",
  },

  {
    Header: "COLOR",
    Footer: "COLOR",
    accessor: "phone",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <span>
          <AiOutlineEye
            size={20}
            color={"#C4C4C4"}
            className="cursor-pointer"
          />
        </span>
      );
    },
  },
  {
    Header: "CATEGORY",
    Footer: "CATEGORY",
    accessor: "category_id",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <span>{props.value ? props.value : "--------"}</span>;
    },
  },

  {
    Header: "BUY PRICE",
    Footer: "BUY PRICE",
    accessor: "buy_price",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <div>{props.value}</div>;
    },
  },
  {
    Header: "SELL PRICE",
    Footer: "SELL PRICE",
    accessor: "sell_price",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <div>{props.value}</div>;
    },
  },
  {
    Header: "STOCK",
    Footer: "STOCK",
    accessor: "stock",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      const data = props.row.original;
      const total = data.variations.reduce((a, c) => a + c.quantity, 0);

      return <div>{total}</div>;
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
        <div className="bg-success radius-16 text-white ps-3 py-1 fs-10">
          {props.value}
        </div>
      );
    },
  },
  {
    Header: "DISCOUNT",
    Footer: "DISCOUNT",
    accessor: "offered_price",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <div className="">{props.value}</div>;
    },
  },

  {
    Header: "DETAILS",
    Footer: "DETAILS",
    accessor: "method",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <span>
          <AiOutlineEye
            size={20}
            color={"#C4C4C4"}
            className="cursor-pointer"
          />
        </span>
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
      const { row, setShowModal, setSelected, setShowDelete } = props;
      const handleUpdate = () => {
        setShowModal(true);
        setSelected(row.original);
      };

      const handleDelete = () => {
        setShowDelete(true);
        setSelected(row.original);
      };
      let iconStyles = { color: "#C4C4C4", fontSize: 20 };
      return (
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-muted cursor-pointer" onClick={handleUpdate}>
            <FaEdit style={iconStyles} />
          </div>
          <div>
            <FiTrash2
              style={iconStyles}
              className="cursor-pointer"
              onClick={handleDelete}
            />
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
