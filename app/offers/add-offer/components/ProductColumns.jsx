export const COLUMNS = [
  {
    Header: "PRODUCT ID",
    Footer: "PRODUCT ID",
    accessor: "id",
    disableSortBy: true,
    sticky: "left",
    style: { overflow: "visible", minWidth: 250 },
    Cell: (props) => {
      const { selected, setSelected, row } = props;
      const handleChange = (checked) => {
        if (checked) {
          setSelected([...selected, row.original.id]);
        } else {
          setSelected(selected.filter((item) => item !== row.original.id));
        }
      };

      return (
        <div className="fs-16">
          <input
            className="form-check-input"
            type="checkbox"
            id={`notify-${row.original.id}`}
            onChange={(e) => handleChange(e.target.checked)}
            checked={selected.includes(props.value) ? true : false}
          />
          <label
            htmlFor={`notify-${row.original.id}`}
            className="form-label fs-14 ms-2 text-clr-gray fw-semi-bold "
          >
            {props.value}
          </label>
        </div>
      );
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
    Header: "CATEGORY",
    Footer: "CATEGORY",
    accessor: "category.name",
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
