import { format } from "date-fns";
import { FaEdit } from "react-icons/fa";

export const COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
    disableSortBy: true,
    sticky: "left",
    style: { overflow: "visible", minWidth: 250 },
    Cell: (props) => {
      return <span>bu{props.value}</span>;
    },
  },
  {
    Header: "Created at",
    Footer: "Created at",
    accessor: "created_at",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <span>{format(new Date(props.value), "dd MMM yyyy ")}</span>;
    },
  },
  {
    Header: "Full Name",
    Footer: "Full Name",
    accessor: "full_name",
    disableSortBy: true,
    sticky: "left",
  },

  {
    Header: "Phone Number",
    Footer: "Phone Number",
    accessor: "phone",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <span>{props.value ? props.value : "--------"}</span>;
    },
  },
  {
    Header: "Address",
    Footer: "Address",
    accessor: "address",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <span>{props.value ? props.value : "--------"}</span>;
    },
  },

  {
    Header: "Products",
    Footer: "Products",
    accessor: "products",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <div className="d-flex justify-content-between">
          <div>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <g clipPath="url(#clip0_126_5353)">
                <path
                  d="M16.25 0.0224609L24.5 4.14746V13.3467L23 12.5967V5.82324L17 8.82324V11.8467L15.5 12.5967V8.82324L9.5 5.82324V8.4834L8 7.7334V4.14746L16.25 0.0224609ZM16.25 7.52246L18.3242 6.47949L12.8984 3.37402L10.4258 4.61621L16.25 7.52246ZM19.9414 5.68262L22.0742 4.61621L16.25 1.69824L14.5039 2.57715L19.9414 5.68262ZM14 13.3467L12.5 14.0967V14.085L8 16.335V21.667L12.5 19.4053V21.0928L7.25 23.7178L0.5 20.3311V12.4092L7.25 9.03418L14 12.4092V13.3467ZM6.5 21.667V16.335L2 14.085V19.4053L6.5 21.667ZM7.25 15.0342L11.5742 12.8779L7.25 10.71L2.92578 12.8779L7.25 15.0342ZM14 15.0225L19.25 12.3975L24.5 15.0225V21.1982L19.25 23.8232L14 21.1982V15.0225ZM18.5 21.7725V18.1982L15.5 16.6982V20.2725L18.5 21.7725ZM23 20.2725V16.6982L20 18.1982V21.7725L23 20.2725ZM19.25 16.8975L22.0742 15.4795L19.25 14.0732L16.4258 15.4795L19.25 16.8975Z"
                  fill="#1877F2"
                />
              </g>
              <defs>
                <clipPath id="clip0_126_5353">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5 -0.000976562)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-muted cursor-pointer ms-4">
            <FaEdit size={16} color="#C4C4C4" />
          </div>
        </div>
      );
    },
  },
  {
    Header: "Status",
    Footer: "Status",
    accessor: "status",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return (
        <div className="bg-success radius-16 text-white px-3 py-1 fs-10">
          {props.value}
        </div>
      );
    },
  },
  {
    Header: "Track ID",
    Footer: "Track ID",
    accessor: "track_id",
    disableSortBy: true,

    sticky: "left",
    Cell: (props) => {
      return (
        <div className="">
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.126 11.268C16.4579 11.268 15.1008 12.6251 15.1008 14.2932C15.1008 15.9614 16.4579 17.3184 18.126 17.3184C19.7944 17.3184 21.1512 15.9614 21.1512 14.2932C21.1512 12.6251 19.7941 11.268 18.126 11.268ZM18.126 15.8058C17.2918 15.8058 16.6134 15.1274 16.6134 14.2932C16.6134 13.459 17.2918 12.7806 18.126 12.7806C18.9602 12.7806 19.6386 13.459 19.6386 14.2932C19.6386 15.1274 18.9602 15.8058 18.126 15.8058ZM7.78987 11.268C6.12173 11.268 4.76465 12.6251 4.76465 14.2932C4.76465 15.9614 6.12173 17.3184 7.78987 17.3184C9.45801 17.3184 10.8151 15.9614 10.8151 14.2932C10.8151 12.6251 9.45801 11.268 7.78987 11.268ZM7.78987 15.8058C6.95568 15.8058 6.27726 15.1274 6.27726 14.2932C6.27726 13.459 6.95568 12.7806 7.78987 12.7806C8.62382 12.7806 9.30248 13.459 9.30248 14.2932C9.30248 15.1274 8.62405 15.8058 7.78987 15.8058ZM20.1632 2.60887C20.1002 2.48365 20.0036 2.37841 19.8843 2.30487C19.7649 2.23133 19.6275 2.19239 19.4873 2.19238H15.5041V3.70499H19.0209L21.0803 7.80112L22.4321 7.12143L20.1632 2.60887Z"
              fill="#B5B5B5"
            />
            <path
              d="M10.1345 13.5621H15.8572V15.0747H10.1345V13.5621ZM5.52098 13.5621H2.89917C2.48142 13.5621 2.14289 13.9006 2.14289 14.3183C2.14289 14.7361 2.48147 15.0746 2.89917 15.0746H5.52103C5.93878 15.0746 6.27731 14.736 6.27731 14.3183C6.27731 13.9006 5.93873 13.5621 5.52098 13.5621ZM23.8412 8.9385L22.3536 7.02253C22.2829 6.93144 22.1924 6.85773 22.0889 6.80703C21.9853 6.75634 21.8716 6.73002 21.7563 6.73008H16.2605V1.43597C16.2605 1.01822 15.9219 0.679688 15.5042 0.679688H2.89917C2.48142 0.679688 2.14289 1.01827 2.14289 1.43597C2.14289 1.85367 2.48147 2.19225 2.89917 2.19225H14.7479V7.48636C14.7479 7.90411 15.0865 8.24264 15.5042 8.24264H21.386L22.4874 9.66145V13.562H20.3949C19.9772 13.562 19.6387 13.9005 19.6387 14.3182C19.6387 14.736 19.9772 15.0745 20.3949 15.0745H23.2437C23.6614 15.0745 24 14.736 24 14.3182V9.40238C24 9.23447 23.944 9.07111 23.8412 8.9385ZM5.47059 9.73012H1.99158C1.57383 9.73012 1.2353 10.0687 1.2353 10.4864C1.2353 10.9042 1.57387 11.2427 1.99158 11.2427H5.47055C5.8883 11.2427 6.22683 10.9041 6.22683 10.4864C6.22688 10.0687 5.8883 9.73012 5.47059 9.73012ZM7.21008 6.7553H0.756281C0.338578 6.7553 0 7.09387 0 7.51162C0 7.92937 0.338578 8.26791 0.756281 8.26791H7.21008C7.62783 8.26791 7.96636 7.92933 7.96636 7.51162C7.96636 7.09392 7.62783 6.7553 7.21008 6.7553Z"
              fill="#B5B5B5"
            />
            <path
              d="M8.44543 3.78027H1.99163C1.57388 3.78027 1.23535 4.11885 1.23535 4.53655C1.23535 4.9543 1.57393 5.29284 1.99163 5.29284H8.44543C8.86318 5.29284 9.20171 4.95426 9.20171 4.53655C9.20176 4.11885 8.86318 3.78027 8.44543 3.78027Z"
              fill="#B5B5B5"
            />
          </svg>
        </div>
      );
    },
  },

  {
    Header: "Method",
    Footer: "Method",
    accessor: "method",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <div className="">COD</div>;
    },
  },
  {
    Header: "Price",
    Footer: "Price",
    accessor: "price",
    disableSortBy: true,
    sticky: "left",
  },
  {
    Header: "COD Fee",
    Footer: "COD Fee",
    accessor: "cod_fee",
    disableSortBy: true,
    sticky: "left",
  },

  {
    Header: "Delivery Fee",
    Footer: "Delivery Fee",
    accessor: "delivery_fee",
    disableSortBy: true,
    sticky: "left",
  },
  {
    Header: "Total Price",
    Footer: "Total Price",
    accessor: "total_price",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      return <span>{props.value ? `BDT ${props.value}` : "------"}</span>;
    },
  },

  {
    Header: "Status Action",
    Footer: "Status Action",
    accessor: "trip_request_id",
    disableSortBy: true,
    sticky: "left",
    Cell: (props) => {
      const { row, setShowModal, setSelected, setShowView } = props;
      const handleStatus = () => {
        setShowModal(true);
        setSelected(row.original);
      };

      //Viewing
      const handleView = () => {
        setShowView(true);
        setSelected(row.original);
      };

      let iconStyles = { color: "#C4C4C4", fontSize: 20 };

      return (
        <div className="d-flex justify-content-between align-items-center">
          <div className="custom-select" style={{ minWidth: 120 }}>
            <div>
              <select className="form-select form-control text-clr-gray fs-12 ">
                <option value="">Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
          <div className="text-muted cursor-pointer ms-4">
            <FaEdit style={iconStyles} />
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
