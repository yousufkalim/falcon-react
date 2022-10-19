import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import ProjectCard from '../Common/ProjectCard';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { useScrollPosition } from '../../utils/ScrollPosition';
import {
  AllProjects,
  Construction,
  Education,
  HumanResources,
  Health,
  Gaming,
  Transport,
  Business,
  Fashion,
  Food,
  Advertisement,
} from '../../utils/ProjectsData';
const items = [
  {
    text: 'All',
    id: '0',
  },
  {
    text: 'Construction',
    id: '1',
  },
  {
    text: 'Education',
    id: '2',
  },
  {
    text: 'Human Resources',
    id: '3',
  },
  {
    text: 'Health',
    id: '4',
  },
  {
    text: 'Gaming',
    id: '5',
  },
  {
    text: 'Transport',
    id: '6',
  },
  {
    text: 'Business',
    id: '7',
  },
  {
    text: 'Fashion',
    id: '8',
  },
  {
    text: 'Food',
    id: '9',
  },
  {
    text: 'Advertisement',
    id: '10',
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const { i18n, t } = useTranslation();
  let position = useScrollPosition();
  const [activeId, setactiveId] = useState(0);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [desp, setDesp] = useState();

  useEffect(() => {
    setDesp(t(props?.description));
  }, [props?.description]);

  useEffect(() => {
    let tab = localStorage.getItem('simpleTab');
    if (tab) {
      console.log('in useEffect', JSON.parse(tab));
      setValue(JSON.parse(tab));
      localStorage.removeItem('simpleTab');
    } else {
      setValue(0);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [activeId]);

  const handleTabChange = (e, index) => {
    localStorage.setItem('simpleTab', index);
    setactiveId(e.target.id);
  };

  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: '100%',
        marginTop: position <= 335 ? '0' : '2.5%',
      }}
    >
      {' '}
      <></>
      <Box
        className='ProjectsNavigateTabsBox'
        sx={{
          position: position <= 335 ? 'block' : 'fixed',
        }}
      >
        <Tabs
          allowScrollButtonsMobile
          selectionFollowsFocus={true}
          visibleScrollbar
          // className='ProjectListTabs'
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          {items.map((val, index) => (
            <Tab
              onClick={(event) => handleTabChange(event, index)}
              label={t(val?.text)}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {AllProjects.map((item) => (
          <ProjectCard
            src={item.image}
            title={item.title}
            description={item.desp}
            to={item.to}
            BtnText={item.BtnText}
            href={item.href}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            tag4={item.tag4}
            tag5={item.tag5}
            tag6={item.tag6}
            tag7={item.tag7}
            tag8={item.tag8}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {Construction.map((item) => (
          <ProjectCard
            src={item.image}
            title={item.title}
            description={item.desp}
            to={item.to}
            BtnText={item.BtnText}
            href={item.href}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            tag4={item.tag4}
            tag5={item.tag5}
            tag6={item.tag6}
            tag7={item.tag7}
            tag8={item.tag8}
            // activeId={activeId}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {' '}
        {Education.map((item) => (
          <ProjectCard
            src={item.image}
            title={item.title}
            description={item.desp}
            to={item.to}
            // LogoSrc={item.LogoSrc}
            // heading={item.heading}
            // para1={item.para1}
            // para2={item.para2}
            // para3={item.para3}
            // para4={item.para4}
            // para5={item.para5}
            BtnText={item.BtnText}
            href={item.href}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            tag4={item.tag4}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {' '}
        {HumanResources.map((item) => (
          <ProjectCard
            src={item.image}
            title={item.title}
            description={item.desp}
            to={item.to}
            BtnText={item.BtnText}
            href={item.href}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            tag4={item.tag4}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {' '}
        {Health.map((item) => (
          <ProjectCard
            src={item.image}
            title={item.title}
            description={item.desp}
            to={item.to}
            BtnText={item.BtnText}
            href={item.href}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            tag4={item.tag4}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {' '}
        {Gaming.map((item) => (
          <ProjectCard
            src={item.image}
            title={item.title}
            description={item.desp}
            to={item.to}
            BtnText={item.BtnText}
            href={item.href}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            tag4={item.tag4}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={6}>
        {' '}
        {Transport.map((item) => (
          <ProjectCard
            src={item.image}
            title={item.title}
            description={item.desp}
            to={item.to}
            BtnText={item.BtnText}
            href={item.href}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            tag4={item.tag4}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={7}>
        {' '}
        {Business.map((item) => (
          <ProjectCard
            src={item.image}
            title={item.title}
            description={item.desp}
            to={item.to}
            BtnText={item.BtnText}
            href={item.href}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            tag4={item.tag4}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={8}>
        {' '}
        {Fashion.map((item) => (
          <ProjectCard
            src={item.image}
            title={item.title}
            description={item.desp}
            to={item.to}
            BtnText={item.BtnText}
            href={item.href}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            tag4={item.tag4}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={9}>
        {' '}
        {Food.map((item) => (
          <ProjectCard
            src={item.image}
            title={item.title}
            description={item.desp}
            to={item.to}
            BtnText={item.BtnText}
            href={item.href}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            tag4={item.tag4}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={10}>
        {' '}
        {Advertisement.map((item) => (
          <ProjectCard
            src={item.image}
            title={item.title}
            description={item.desp}
            to={item.to}
            BtnText={item.BtnText}
            href={item.href}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            tag4={item.tag4}
          />
        ))}
      </TabPanel>
    </Box>
  );
}
