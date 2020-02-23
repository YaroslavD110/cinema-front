import * as React from "react";
import { Table, Popover, Button, Icon } from "antd";
import moment from "moment";
import { useRouter } from "next/router";

// Components
import AdminLayout from "@app/components/admin/AdminLayout";

// API
import { FilmAPI } from "@app/api/Film";

// Config
import { fullDateFormat } from "shared/config";

// Types
import { IFilmFull } from "shared/types";
import { ColumnProps, PaginationConfig } from "antd/lib/table";

interface IAdminFilmsListProps {
  films: IFilmFull[];
  numberOfFilms: number;
}

const filmsPerPage = 10;
const columns: ColumnProps<IFilmFull>[] = [
  {
    title: "ID",
    dataIndex: "id"
  },
  {
    title: "Title",
    dataIndex: "title",
    render: (title, { engTitle }) =>
      engTitle && engTitle !== title ? `${title} / ${engTitle}` : title
  },
  {
    title: "IMDB id",
    dataIndex: "IMDBid",
    render: IMDBid => IMDBid || "N/A"
  },
  {
    title: "Updated At",
    dataIndex: "updatedAt",
    render: updatedAt => moment(updatedAt).format(fullDateFormat)
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    render: createdAt => moment(createdAt).format(fullDateFormat)
  },
  {
    render: () => (
      <Popover
        placement="left"
        trigger="click"
        content={
          <Button.Group>
            <Button>Delete</Button>
            <Button>Details</Button>
            <Button>Preview</Button>
          </Button.Group>
        }
      >
        <Button onClick={event => event.stopPropagation()}>
          <Icon type="ellipsis" />
        </Button>
      </Popover>
    )
  }
];

export const AdminFilmsList: NextFC<IAdminFilmsListProps> = props => {
  const router = useRouter();
  const [isLoading, setLoadingStatus] = React.useState(false);
  const [data, setData] = React.useState(props.films);
  const [pagination, setPagination] = React.useState<PaginationConfig>({
    total: props.numberOfFilms,
    current: 1
  });

  const handleChange = async (pagination: PaginationConfig) => {
    const { current } = pagination;

    setLoadingStatus(true);
    setPagination(pagination);

    const films = await FilmAPI.fetchAll((current! - 1) * filmsPerPage);

    if (films) setData(films);
    setLoadingStatus(false);
  };

  return (
    <AdminLayout title="Films list">
      <Table
        columns={columns}
        loading={isLoading}
        dataSource={data}
        pagination={pagination}
        rowKey={row => row.id.toString()}
        rowClassName={() => "admin-table__row"}
        onChange={handleChange}
        onRow={film => ({
          onClick(event) {
            event.stopPropagation();
            router.push("/admin/film/[id]", `/admin/film/${film.id}`);
          }
        })}
      />
    </AdminLayout>
  );
};

AdminFilmsList.getInitialProps = async () => {
  const films = await FilmAPI.fetchAll();
  const numberOfFilms = await FilmAPI.fetchCount();

  return films && numberOfFilms
    ? { films, numberOfFilms }
    : { films: [], numberOfFilms: 0 };
};

export default AdminFilmsList;
