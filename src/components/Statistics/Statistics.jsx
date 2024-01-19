import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  //     return (<section class="statistics">
  //   <h2 class="title">Upload stats</h2>

  //   <ul class="stat-list">
  //     <li class="item">
  //       <span class="label">.docx</span>
  //       <span class="percentage">4%</span>
  //     </li>
  //     <li class="item">
  //       <span class="label">.mp3</span>
  //       <span class="percentage">14%</span>
  //     </li>
  //     <li class="item">
  //       <span class="label">.pdf</span>
  //       <span class="percentage">41%</span>
  //     </li>
  //     <li class="item">
  //       <span class="label">.mp4</span>
  //       <span class="percentage">12%</span>
  //     </li>
  //   </ul>
  //     </section>);
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map((item, idx) => (
          <StatListItem key={item.id} id={item.id} index={idx}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </Section>
  );
};

// export const Statistics = ({title, stats}) => {
//     return (<section className={css.statistics}>
//         {title && <h2 className="title">{title}</h2>}
//         {/* <StatsList stats={stats} /> */}
//              <ul className={css.statList}>
//             {stats.map( ({id, label, percentage}) => {
//                 return (<li className={css.item} key={id} style={{backgroundColor: `${makeGreen()}`}}>
//                     <span className="label">{label}</span>
//                     <span className="percentage">{percentage}%</span>
//             </li>)
//             })}
//         </ul>
//     </section>);
// };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
