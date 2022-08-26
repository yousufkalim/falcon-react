// Init
import { Grid } from '@mui/material';
import React from 'react';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';
import OurProjectCard from './OurProjectCard';

// Importing Components

// Home Component
export default function ClientsList() {
  return (
    <>
      <div>
        <OurProjectCard
          Reverse
          LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/microsoftlogo.png`}
          src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/microsoft_update.png`}
          title='Microsoft'
          heading='Microsoft'
          description='Falcon Consulting has been asked by Microsoft for its expertise in .NET and reporting to implement product analysis tools for the media catalogs (music, video and ebooks) on the Windows Store using the latest Azure technologies.'
          para1='Falcon Consulting has been asked by Microsoft for its expertise in .NET and reporting to implement product analysis tools for the media catalogs (music, video and ebooks) on the Windows Store using the latest Azure technologies.'
          para2='OUR CONTRIBUTION'
          para3='• Implementation of project developments and production quality control'
          para4='• Development in U-SQL under Azure Data Lake Analytics of scripts for quality control of data from the ebook catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).'
          para5='• Migration of projects developed in Scope and SQL Server to Azure Data Lake Analytics and development in U-SQL under Azure of data quality control scripts from the video catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).'
        />
        <OurProjectCard
          LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/canonlogo.png`}
          src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/canon_update.png`}
          title='Canon'
          heading='Canon'
          description='Falcon Consulting has been asked by Canon for its expertise in .NET and its ability to adapt to any business to set up several projects around EDM Therefore for their customers (several sectors of activity: banking, insurance, construction, aeronautics,...)'
          para1='Falcon Consulting has been asked by Canon for its expertise in .NET and its ability to adapt to any business to set up several projects around EDM Therefore for their customers (several sectors of activity: banking, insurance, construction, aeronautics,...)'
          para2='OUR CONTRIBUTION'
          para3='• Implementation of project developments and production quality control'
          para4='• Development in C# 4.6 of a component using the YouSign API for managing electronic signatures from workflows in Therefore'
          para5='• Development in C#, C# Core, ASP.NET, ASP.NET Core of several applications dedicated to Canon customers using Therefore API.'
          para6='• Creation and implementation of reports in PowerBI (visualization of extracts, formatting of counters and graphs for data consistency checking)'
          para7='• raining of various Canon customers in the use, management and administration of Therefore'
          para8='• Technical support around Therefore from different Canon customers'
        />
        <OurProjectCard
          Reverse
          LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/fnaclogo.png`}
          src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/fnac_update.png`}
          title='Fnac'
          heading='Fnac'
          description='Falcon Consulting has been asked by FNAC for its expertise in .NET and SQL to reinforce the project teams related to inventory, stocks, locations, label printing, customer orders.'
          para1='Falcon Consulting has been asked by FNAC for its expertise in .NET and SQL to reinforce the project teams related to inventory, stocks, locations, label printing, customer orders.'
          para2='OUR CONTRIBUTION'
          para3='• Collection and consolidation of business requests'
          para4='• Implementation of project developments and production quality control'
          para5='• Development in ASP.NET MVC 4 and Entity Framework 5 to develop a tool for managing store inventories (inventory management, location management, in-store label printing), unsold product returns, shipping and customer order remittances, use of EXT.NET modules with JavaScript / JQuery development to modernize this tool.'
          para6='• Development in C# Compact Framework 3.5 to upgrade the tool for managing store inventories, returns of unsold products, shipping and customer order remittances on PDAs used in the store by staff.'
          para7='• T-SQL development (generation of extracts, counters and data consistency checks, creation of stored procedures for the different projects, data archiving)'
          para8='• Development in ASP.NET 3.5 to upgrade a shipping management tool for live customer orders in Switzerland'
        />
        <OurProjectCard
          title='Accor Hotels'
          description='Falcon Consulting has been asked by Accor for its expertise in .NET and SQL to maintain the tools related to the training courses and trainings.'
          LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/accorlogo.png`}
          src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/accor_update.png`}
          heading='Accor Hotels'
          para1='Falcon Consulting has been asked by Accor for its expertise in .NET and SQL to maintain the tools related to the training courses and trainings.'
          para2='OUR CONTRIBUTION'
          para3='• Collection and consolidation of business requests'
          para4='• Implementation of project developments and production quality control'
          para5='• Development in ASP.NET 3.5, Spring.NET and nHibernate to develop a tool for managing the invoicing of courses and trainings.'
          para6='• T-SQL development (generation of extracts, counters and data consistency checks)'
          para7='• rDevelopment to evolve invoices to the new SSRS format'
          para8='• Kettle-based batch development for import / export and data transformation'
        />
      </div>
    </>
  );
}
