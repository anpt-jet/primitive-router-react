import React from 'react';
import { Link } from 'react-router-dom';
import { titleList } from '../resource';

export const HomePage = () => (
  <React.Fragment>
    {titleList.map(({ title, id }) => (
      <div key={id}>
        <Link to={`/details/${id}`} href={`/details/${id}`}>
          {title}
        </Link>
      </div>
    ))}
  </React.Fragment>
);

export default HomePage;
