import * as React from "react";
import { Row, Col, Select, Form } from "antd";

// Types
import { IFilmFull } from "shared/types";

interface ILabelsRowProps extends IFilmFull {}

export const LabelsRow: React.FC<ILabelsRowProps> = props => {
  const { genres, actors, directors, countries } = props;

  const labelsConfig = [
    {
      title: "Genres",
      defaultValue: genres.map(({ id }) => id),
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
      defaultValue: actors.map(({ id }) => id),
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
      defaultValue: directors.map(({ id }) => id),
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
      defaultValue: countries.map(({ id }) => id),
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
    <div className="admin-block">
      <Row gutter={20}>
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
  );
};

export default LabelsRow;
