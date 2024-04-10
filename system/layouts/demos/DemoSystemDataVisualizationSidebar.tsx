import styles from '@system/layouts/demos/DemoSystemDataVisualizationSidebar.module.scss';

import * as React from 'react';

import Tag from '@system/documents/Tag';

import { SubText } from '@system/typography';

export const VISUALIZATION_OPTIONS_HEADINGS = [``, `Name`, `Description`];
export const VISUALIZATION_OPTIONS = [
  {
    href: `/area`,
    name: 'Area',
    data: [
      '',
      <Tag>Area</Tag>,
      <SubText style={{ marginTop: 7 }}>
        By default, an area chart displays the series overlapping one another. However, you can choose to stack the series on top of each other instead. In this case, the data
        values at each point on the x-axis are summed. In a stacked area chart, the value for each series is always relative to the value of the preceding series. When stacking a
        combination of negative and positive values, the areas will overlap.
      </SubText>,
    ],
  },
  {
    href: `/bar`,
    name: 'Bar',
    data: [
      '',
      <Tag>Bar</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A bar chart, also known as a bar graph, is a type of chart that presents categorical data using rectangular bars. The heights or lengths of these bars are proportional to
        the values they represent. The bars can be oriented either vertically or horizontally, depending on the layout of the chart.
      </SubText>,
    ],
  },
  {
    href: `/bubble`,
    name: 'Bubble',
    data: [
      '',
      <Tag>Bubble</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A bubble chart is a type of chart that displays three dimensions of data. Each entity with its triplet (v1, v2, v3) of associated data is plotted as a disk, where two of
        the values (v1 and v2) are expressed through the disk's position on the x and y axes, and the third value (v3) is represented by the size of the disk.
      </SubText>,
    ],
  },
  {
    href: `/calendar`,
    name: 'Calendar',
    data: [
      '',
      <Tag>Calendar</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A calendar chart is a visualization used to display activity over an extended period, such as months or years. This type of chart is particularly useful when you want to
        illustrate how a quantity varies based on the day of the week or how it trends over time.
      </SubText>,
    ],
  },
  {
    href: `/candlestick`,
    name: 'Candlestick',
    data: [
      '',
      <Tag>Candlestick</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A candlestick chart is used to display the opening and closing prices of a security, along with the high and low prices reached during a specific period, typically one day.
      </SubText>,
    ],
  },
  {
    href: `/cohort`,
    name: 'Cohort',
    data: [
      '',
      <Tag>Cohort</Tag>,
      <SubText style={{ marginTop: 7 }}>
        Cohort analysis is a subset of behavioral analytics that takes the data from a given dataset and breaks it down into related groups for analysis, rather than considering
        all users as a single unit.
      </SubText>,
    ],
  },
  {
    href: `/column`,
    name: 'Column',
    data: [
      '',
      <Tag>Column</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A column chart is a graphic representation of data. Column charts display vertical bars going across the chart horizontally, with the values axis being displayed on the
        left side of the chart.
      </SubText>,
    ],
  },
  {
    href: `/distribution`,
    name: 'Distribution',
    data: [
      '',
      <Tag>Distribution</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A distribution plot is a useful tool for comparing the range and distribution of numerical data across different groups. This type of plot effectively visualizes how data
        is distributed but is not suitable for detailed analysis, as it only provides a summary of the data distribution.
      </SubText>,
    ],
  },
  {
    href: `/donut`,
    name: 'Donut',
    data: [
      '',
      <Tag>Donut</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A doughnut chart is used to display the relationship between parts and a whole. Unlike a pie chart, a doughnut chart can contain multiple data series, with each series
        represented as a ring in the chart. The first data series appears in the center of the chart, while subsequent series are added as concentric rings around the center.
      </SubText>,
    ],
  },
  {
    href: `/dotplot`,
    name: 'Dotplot',
    data: [
      '',
      <Tag>Dot plot</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A Dot plot is a versatile and straightforward way to visualize data, offering clear insights into the distribution and comparison of values across different groups or
        categories. Their simplicity and clarity can be particularly valuable in exploratory data analysis, educational settings, and any situation where individual data points and
        their distribution are of interest.
      </SubText>,
    ],
  },
  {
    href: `/heatmap`,
    name: 'Heatmap',
    data: [
      '',
      <Tag>Heatmap</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A heat map, also known as a heatmap, is a graphical representation of data in which individual values contained in a matrix are represented by colors. Heat maps are similar
        to shading matrices, which have been in use for over a century.
      </SubText>,
    ],
  },
  {
    href: `/histogram`,
    name: 'Histogram',
    data: [
      '',
      <Tag>Histogram</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A histogram is an accurate representation of the distribution of numerical data. It serves as an estimate of the probability distribution of a continuous, quantitative
        variable.
      </SubText>,
    ],
  },
  {
    href: `/line`,
    name: 'Line',
    data: [
      '',
      <Tag>Line</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A line chart, also known as a line graph, is a type of chart that displays information as a series of data points called 'markers' connected by straight line segments.
      </SubText>,
    ],
  },
  {
    href: `/matrix`,
    name: 'Matrix',
    data: [
      '',
      <Tag>Matrix</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A matrix chart is a visualization tool that displays relationships between two or more variables in a dataset using a grid format.
      </SubText>,
    ],
  },
  {
    href: `/pie`,
    name: 'Pie',
    data: [
      '',
      <Tag>Pie</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A pie chart, also known as a circle chart, is a circular statistical graphic divided into slices that illustrate numerical proportions. In a pie chart, the arc length of
        each slice (and consequently its central angle and area) is proportional to the quantity it represents.
      </SubText>,
    ],
  },
  {
    href: `/radar`,
    name: 'Radar',
    data: [
      '',
      <Tag>Radar</Tag>,
      <SubText style={{ marginTop: 7 }}>
        A Radar chart combines a traditional pie chart with a modified polar area chart, allowing for the comparison of two sets of related data. The base pie chart represents the
        first dataset in the usual way, with varying slice sizes corresponding to the proportions of the data.
      </SubText>,
    ],
  },
].map((each, index) => {
  return { ...each, id: index + 1 };
});

export default function DemoSystemDataVisualizationSidebar(props) {
  return (
    <div className={styles.root}>
      {props.data &&
        props.data.map((each) => {
          const isActive = props.active === each.name.toLowerCase();

          if (isActive) {
            return (
              <span key={each.name} className={styles.item}>
                {each.name}
              </span>
            );
          }

          return (
            <a
              key={each.name}
              href={`/examples/system/data-visualization${each.href}`}
              className={styles.link}
              style={props.active === each.name ? { color: `var(--color-primary)` } : undefined}
            >
              {each.name}
            </a>
          );
        })}
    </div>
  );
}
