import * as React from "react";
import moment from "moment";
import { Row, Col, Statistic, Button } from "antd";

// Types
import { IFilmFull } from "shared/types";

// Config
import { fullDateFormat } from "shared/config";

interface ITopRowProps extends IFilmFull {}

export const TopRow: React.FC<ITopRowProps> = props => {
  const { id, IMDBid, updatedAt, createdAt } = props;

  return (
    <div className="admin-block">
      <Row gutter={20} className="edit-toprow">
        <Col span={2}>
          <Statistic title="ID" value={id} />
        </Col>

        <Col span={4}>
          <Statistic title="IMDB Id" value={IMDBid} />
        </Col>

        <Col span={6}>
          <Statistic
            title="Updated At"
            value={moment(updatedAt).format(fullDateFormat)}
          />
        </Col>

        <Col span={6}>
          <Statistic
            title="Created At"
            value={moment(createdAt).format(fullDateFormat)}
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
  );
};

export default TopRow;
