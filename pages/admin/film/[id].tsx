import * as React from "react";
import { useRouter } from "next/router";
import moment from "moment";
import {
  Card,
  Row,
  Col,
  Icon,
  Input,
  Form,
  Tooltip,
  DatePicker,
  Statistic,
  Button,
  Select
} from "antd";

// Components
import AdminLayout from "@app/components/AdminLayout";

// API
import { FilmAPI } from "@app/api/Film";
import { LabelsAPI } from "@app/api/Labels";

// Types
import { IFilmFull, IGenre, IActor, ICountry, IDirector } from "shared/types";

interface IFilmPageProps {
  film: IFilmFull;
  genres: IGenre[];
  countries: ICountry[];
  actors: IActor[];
  directors: IDirector[];
}

// const fieldsConfig: {
//   name: keyof IFilmFull;
//   type: "text" | "number";
// }[] = [
//   {
//     name: "title",
//     type: "text",

//   }
// ]

export const FilmPage: NextFC<IFilmPageProps> = props => {
  const { film } = props;
  const router = useRouter();
  const id = router.query.id as string;

  const labelsConfig = [
    {
      title: "Genres",
      defaultValue: film.genres.map(({ id }) => id),
      render() {
        return props.genres.map(({ id, label }) => (
          <Select.Option key={id} value={id}>
            {label}
          </Select.Option>
        ));
      }
    },
    {
      title: "Actors",
      defaultValue: film.actors.map(({ id }) => id),
      render() {
        return props.actors.map(({ id, name }) => (
          <Select.Option key={id} value={id}>
            {name}
          </Select.Option>
        ));
      }
    },
    {
      title: "Directors",
      defaultValue: film.directors.map(({ id }) => id),
      render() {
        return props.directors.map(({ id, name }) => (
          <Select.Option key={id} value={id}>
            {name}
          </Select.Option>
        ));
      }
    },
    {
      title: "Countries",
      defaultValue: film.countries.map(({ id }) => id),
      render() {
        return props.countries.map(({ id, name }) => (
          <Select.Option key={id} value={id}>
            {name}
          </Select.Option>
        ));
      }
    }
  ];

  return (
    <AdminLayout title="Film page">
      <div className="admin-block">
        <Row gutter={10} className="edit-toprow">
          <Col span={2}>
            <Statistic title="ID" value={film.id} />
          </Col>

          <Col span={4}>
            <Statistic title="IMDB Id" value={film.IMDBid} />
          </Col>

          <Col span={6}>
            <Statistic
              title="Updated At"
              value={moment(film.updatedAt).format("MM DD YYYY, h:mm:ss")}
            />
          </Col>

          <Col span={6}>
            <Statistic
              title="Created At"
              value={moment(film.createdAt).format("MM DD YYYY, h:mm:ss")}
            />
          </Col>

          <Col span={6}>
            <Button.Group>
              <Button type="default">Save Changes</Button>
              <Button type="default">Refresh</Button>
              <Button type="default">Delete</Button>
            </Button.Group>
          </Col>
        </Row>
      </div>

      <div className="admin-block">
        <Row gutter={25}>
          <Col span={6}>
            <Card
              className="edit-poster__block"
              cover={<img src={film.posterImg} />}
              actions={[<Icon type="edit" />]}
            >
              <Form.Item
                label={
                  <span>
                    Alt&nbsp;
                    <Tooltip title="Alternative text">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                <Input />
              </Form.Item>
            </Card>
          </Col>

          <Col span={6}>
            <Form.Item label="Title">
              <Input type="text" defaultValue={film.title} name="title" />
            </Form.Item>

            <Form.Item label="Original title">
              <Input type="text" defaultValue={film.engTitle} name="engTitle" />
            </Form.Item>

            <Form.Item label="Slug">
              <Input
                type="text"
                defaultValue={film.slug}
                name="slug"
                disabled
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Production">
              <Input type="text" defaultValue={film.production} />
            </Form.Item>

            <Form.Item label="Runtime">
              <Input
                type="number"
                addonAfter="min"
                defaultValue={film.runtime}
              />
            </Form.Item>

            <Form.Item label="Year">
              <DatePicker
                mode="year"
                format="YYYY"
                defaultValue={moment().year(film.year)}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Release date">
              <DatePicker defaultValue={moment(film.releaseDate)} />
            </Form.Item>
          </Col>

          <Col span={18}>
            <Form.Item label="Description">
              <Input.TextArea rows={12} defaultValue={film.description} />
            </Form.Item>
          </Col>
        </Row>
      </div>

      <div className="admin-block">
        <Row gutter={10}>
          {labelsConfig.map((label, index) => (
            <Col key={index} span={8}>
              <Form.Item label={label.title}>
                <Select
                  className="edit-label__select"
                  mode="multiple"
                  defaultValue={label.defaultValue}
                >
                  {label.render()}
                </Select>
              </Form.Item>
            </Col>
          ))}
        </Row>
      </div>
    </AdminLayout>
  );
};

FilmPage.getInitialProps = async ctx => {
  const id = parseInt(ctx.query.id as string);

  const film = await FilmAPI.fetch(id);
  const genres = await LabelsAPI.fetchAllGenres();
  const actors = await LabelsAPI.fetchAllActors();
  const countries = await LabelsAPI.fetchAllCountries();
  const directors = await LabelsAPI.fetchAllDirectors();

  return {
    film: film!,
    genres: genres!,
    actors: actors!,
    countries: countries!,
    directors: directors!
  };
};

export default FilmPage;
