import React from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";

const Cafe = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.nombre}</td>
      <td>{props.offer.tipo}</td>
      <td><FormattedMessage id={props.offer.region} /></td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} />
      </td>
    </tr>
  );
};

export default Cafe;