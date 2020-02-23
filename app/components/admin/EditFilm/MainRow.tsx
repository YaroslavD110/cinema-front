import * as React from "react";
import moment, { Moment } from "moment";
import { Row, Col, Form, Input, Icon, Card, Tooltip, DatePicker } from "antd";

// Types
import { IFilmFull } from "shared/types";
import { InputProps } from "antd/lib/input";
import { DatePickerProps } from "antd/lib/date-picker/interface";

interface IMainRowProps extends IFilmFull {}

interface IFieldsConfigItem
  extends Omit<InputProps, "defaultValue">,
    Pick<DatePickerProps, "format">,
    Pick<DatePickerProps, "mode"> {
  title: string;
  name: keyof IFilmFull;
  type: "text" | "number" | "date";
  defaultValue?: string | number | Moment;
}

export const MainRow: React.FC<IMainRowProps> = props => {
  const { posterImg, year, releaseDate, description } = props;

  const fieldsConfig: IFieldsConfigItem[][] = [
    [
      {
        title: "Title",
        name: "title",
        type: "text",
        defaultValue: props.title
      },
      {
        title: "Original title",
        name: "engTitle",
        type: "text",
        defaultValue: props.engTitle
      },
      {
        title: "Slug",
        name: "slug",
        type: "text",
        defaultValue: props.slug,
        disabled: true
      }
    ],
    [
      {
        title: "Production",
        name: "production",
        type: "text",
        defaultValue: props.production
      },
      {
        title: "Runtime",
        name: "runtime",
        type: "number",
        addonAfter: "min",
        defaultValue: props.runtime
      },
      {
        title: "Year",
        type: "date",
        name: "year",
        mode: "year",
        format: "YYYY",
        defaultValue: moment().year(year)
      }
    ],
    [
      {
        title: "Release date",
        type: "date",
        name: "releaseDate",
        defaultValue: moment(releaseDate)
      }
    ]
  ];

  return (
    <div className="admin-block">
      <Row gutter={20}>
        <Col span={6}>
          <Card
            className="edit-poster__block"
            cover={<img src={posterImg} />}
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

        {fieldsConfig.map(fields => (
          <Col span={6}>
            {fields.map(({ title, defaultValue, ...fieldProps }) => (
              <Form.Item label={title}>
                {fieldProps.type === "date" ? (
                  <DatePicker
                    name={fieldProps.name}
                    mode={fieldProps.mode}
                    format={fieldProps.format}
                    defaultValue={defaultValue as Moment}
                  />
                ) : (
                  <Input
                    {...fieldProps}
                    defaultValue={defaultValue as string}
                  />
                )}
              </Form.Item>
            ))}
          </Col>
        ))}

        <Col span={18}>
          <Form.Item label="Description">
            <Input.TextArea rows={12} defaultValue={description} />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default MainRow;
