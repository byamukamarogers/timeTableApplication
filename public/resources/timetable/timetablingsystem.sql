-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2020 at 09:27 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `timetablingsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `allocations`
--

CREATE TABLE `allocations` (
  `allocationid` int(11) NOT NULL,
  `roomid` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `staffid` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `courseid` int(11) NOT NULL,
  `coursename` varchar(50) NOT NULL,
  `coursecode` varchar(50) NOT NULL,
  `creditunits` int(11) DEFAULT NULL,
  `studyyear` int(11) NOT NULL,
  `studysemester` int(11) NOT NULL,
  `coursetypeid` int(11) NOT NULL,
  `programid` int(11) NOT NULL,
  `numberoflecturesperweek` int(11) DEFAULT NULL,
  `durationperlecture` decimal(3,2) DEFAULT NULL,
  `maximumnumberoflecturesperday` int(11) DEFAULT NULL,
  `staffid` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`courseid`, `coursename`, `coursecode`, `creditunits`, `studyyear`, `studysemester`, `coursetypeid`, `programid`, `numberoflecturesperweek`, `durationperlecture`, `maximumnumberoflecturesperday`, `staffid`, `created_at`, `updated_at`) VALUES
(1, 'Business Inteligence', 'SIS3204', 4, 3, 2, 1, 1, 4, '1.00', 2, 1, '2020-11-21 00:00:00', '2020-11-14 00:00:00'),
(2, 'Decision Support Systems', 'SIS3203', 4, 3, 2, 1, 1, 4, '1.00', 2, 1, '2020-11-21 00:00:00', '2020-11-14 00:00:00'),
(3, 'Social Issues In Computing', 'SIS3202', 3, 3, 2, 1, 1, 4, '1.00', 2, 1, '2020-11-21 00:00:00', '2020-11-14 00:00:00'),
(4, 'Research Project', 'SIS3205', 5, 3, 2, 1, 1, 4, '1.00', 2, 1, '2020-11-21 00:00:00', '2020-11-14 00:00:00'),
(5, 'Information Systems Securiry', 'SIS2203', 4, 2, 2, 2, 1, 4, '2.00', 2, 1, '2020-12-01 20:44:43', '2020-12-01 20:59:16');

-- --------------------------------------------------------

--
-- Table structure for table `coursetypes`
--

CREATE TABLE `coursetypes` (
  `coursetypeid` int(11) NOT NULL,
  `coursetypename` varchar(50) NOT NULL,
  `coursetypecode` varchar(50) NOT NULL,
  `coursetypedescription` varchar(150) DEFAULT NULL,
  `staffid` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coursetypes`
--

INSERT INTO `coursetypes` (`coursetypeid`, `coursetypename`, `coursetypecode`, `coursetypedescription`, `staffid`, `created_at`, `updated_at`) VALUES
(1, 'Practical', 'P', 'Practical subjects and course units', 1, '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(2, 'Theory', 'Th', 'Theoretical lectures', 0, '2020-12-01 15:30:23', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `days`
--

CREATE TABLE `days` (
  `dayid` int(11) NOT NULL,
  `weekday` varchar(50) DEFAULT NULL,
  `daycode` varchar(3) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `days`
--

INSERT INTO `days` (`dayid`, `weekday`, `daycode`, `created_at`, `updated_at`) VALUES
(1, 'Monday', 'Mo', '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(2, 'Tuesday', 'Tu', '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(3, 'Wednesday', 'We', '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(4, 'Thursday', 'Th', '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(5, 'Friday', 'Fr', '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(6, 'Saturday', 'Sa', '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(7, 'Sunday', 'Su', '2020-11-25 00:00:00', '2020-11-25 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `departmentid` int(11) NOT NULL,
  `departmentname` varchar(50) DEFAULT NULL,
  `departmentcode` varchar(8) DEFAULT NULL,
  `facultyid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`departmentid`, `departmentname`, `departmentcode`, `facultyid`) VALUES
(1, 'Computer Science', 'DCS', 1),
(2, 'CHEMISTRY', 'CHE', 1);

-- --------------------------------------------------------

--
-- Table structure for table `durations`
--

CREATE TABLE `durations` (
  `durationid` int(11) NOT NULL,
  `durationname` varchar(50) DEFAULT NULL,
  `starttime` time DEFAULT NULL,
  `endtime` time DEFAULT NULL,
  `durationlength` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `facultyid` int(11) NOT NULL,
  `facultyname` varchar(50) NOT NULL,
  `institutionid` int(11) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`facultyid`, `facultyname`, `institutionid`, `created_at`, `updated_at`) VALUES
(1, 'Faculty Of Science', 1, '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(8, 'Economics and Statistics', 1, '2020-12-01 14:12:35', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`) VALUES
(1, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `institutions`
--

CREATE TABLE `institutions` (
  `institutionid` int(11) NOT NULL,
  `institutionname` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phonecontact` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `institutions`
--

INSERT INTO `institutions` (`institutionid`, `institutionname`, `address`, `phonecontact`, `email`, `created_at`, `updated_at`) VALUES
(1, 'Kyambogo University', 'Kyambogo, Kampala, Uganda', '+256414123456', 'info@kyu.ac.ug', '2020-11-25 00:23:00', '2020-11-25 00:00:00'),
(2, 'Makerere University', 'Makerere Kampala', '+256751736273', 'muk@mak.ac.ug', '2020-12-01 13:45:14', '2020-12-01 13:47:36'),
(3, 'NKUMBA UNIVERSITY', 'NKUMBA UGANDA', '+256751736273', 'sample@nkumba.ac.ug', '2020-12-01 13:48:31', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `lectureclass`
--

CREATE TABLE `lectureclass` (
  `classid` int(11) NOT NULL,
  `classname` varchar(50) NOT NULL,
  `isprogram` tinyint(1) DEFAULT '0',
  `programid` int(11) DEFAULT NULL,
  `iscourse` tinyint(1) DEFAULT '0',
  `courseid` int(11) DEFAULT NULL,
  `semester` int(11) DEFAULT NULL,
  `totalstudents` int(11) DEFAULT NULL,
  `departmentid` int(11) NOT NULL,
  `createdby` int(11) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lectureclass`
--

INSERT INTO `lectureclass` (`classid`, `classname`, `isprogram`, `programid`, `iscourse`, `courseid`, `semester`, `totalstudents`, `departmentid`, `createdby`, `created_at`, `updated_at`) VALUES
(1, 'BIS-DAY 2018-2019', 1, 1, 0, NULL, 2, 40, 1, 1, '2020-12-01 00:00:00', '2020-11-14 00:00:00'),
(5, 'Sample', 0, 1, 0, 0, 1, 25, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `text` varchar(45) NOT NULL,
  `iconCls` varchar(30) DEFAULT NULL,
  `className` varchar(45) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `text`, `iconCls`, `className`, `menu_id`) VALUES
(1, 'menu1', 'fa fa-group fa-lg', NULL, NULL),
(2, 'menu11', 'xf0c0', 'groups', 1),
(3, 'menu12', 'xf007', 'user', 1),
(4, 'staticData', 'fa fa-database fa-lg', NULL, NULL),
(5, 'actors', 'xf005', 'actorsgrid', 4),
(6, 'categories', 'xf013', 'categoriesgrid', 4),
(7, 'languages', 'xf1ab', 'languagesgrid', 4),
(8, 'cities', 'xf018', 'citiesgrid', 4),
(9, 'countries', 'xf0ac', 'countriesgrid', 4),
(10, 'cms', 'fa fa-film fa-lg', NULL, NULL),
(11, 'films', 'xf1c8', 'films', 10),
(12, 'reports', 'fa fa-line-chart fa-lg', NULL, NULL),
(13, 'salesfilmcategory', 'xf200', 'salesfilmcategory', 12);

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `menu_id` int(11) NOT NULL,
  `groups_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`menu_id`, `groups_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1);

-- --------------------------------------------------------

--
-- Table structure for table `programs`
--

CREATE TABLE `programs` (
  `programid` int(11) NOT NULL,
  `programname` varchar(50) DEFAULT NULL,
  `programcode` varchar(8) DEFAULT NULL,
  `departmentid` int(11) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `programs`
--

INSERT INTO `programs` (`programid`, `programname`, `programcode`, `departmentid`, `duration`, `created_at`, `updated_at`) VALUES
(1, 'Bachelors of Information Systems', 'BIS', 1, 3, '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(2, 'Diploma in Computer Science', 'DCS', 1, 2, '2020-12-01 14:53:30', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `roomid` int(11) NOT NULL,
  `roomname` varchar(50) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  `facultyid` int(11) DEFAULT NULL,
  `roomtypeid` int(11) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`roomid`, `roomname`, `capacity`, `facultyid`, `roomtypeid`, `location`, `created_at`, `updated_at`) VALUES
(1, 'S2.39', 24, 1, 1, 'Faculty of science block', '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(2, 'S2.40', 25, 1, 1, 'Faculty of science block', '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(3, 'S2.49', 24, 1, 1, 'Faculty of science block', '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(4, 'S2.44', 25, 1, 1, 'Faculty of science block', '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(8, 'S2.50', 45, 1, 1, 'FOS', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `roomtypes`
--

CREATE TABLE `roomtypes` (
  `roomtypeid` int(11) NOT NULL,
  `roomtypename` varchar(50) DEFAULT NULL,
  `roomtypecode` varchar(5) DEFAULT NULL,
  `roomtypedescription` varchar(150) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roomtypes`
--

INSERT INTO `roomtypes` (`roomtypeid`, `roomtypename`, `roomtypecode`, `roomtypedescription`, `created_at`, `updated_at`) VALUES
(1, 'Computer Lab', 'Lab', 'Computer Laboratory', '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(2, 'sample', 'se', 'sfas', '2020-12-01 21:14:28', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ssessions`
--

CREATE TABLE `ssessions` (
  `ssessionid` int(11) NOT NULL,
  `from` datetime NOT NULL,
  `to` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staffid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `initial` varchar(5) NOT NULL,
  `gender` varchar(7) NOT NULL,
  `address` text,
  `email` varchar(100) DEFAULT NULL,
  `phone1` varchar(15) DEFAULT NULL,
  `phone2` varchar(15) DEFAULT NULL,
  `departmentid` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staffid`, `name`, `initial`, `gender`, `address`, `email`, `phone1`, `phone2`, `departmentid`, `created_at`, `updated_at`) VALUES
(1, 'Rogers Byamukama', 'RB', 'M', 'Kyambogo', 'byamukamarogers@gmail.com', '+256774340136', NULL, 1, '2020-11-25 00:00:00', '2020-11-25 00:00:00'),
(6, 'BYAMUKAMA ROGERS', 'gv', 'Male', 'sdf', 'rogersbyamukama@gmail.com', '+256751736273', '+256751736273', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'BYAMUKAMA ROGERS', 'gv', 'Male', 'sdf', 'rogersbyamukama@gmail.com', '+256751736273', '+256751736273', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'BYAMUKAMA ROGERS', 'gv', 'Male', 'sdf', 'rogersbyamukama@gmail.com', '+256751736273', '+256751736273', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'BYAMUKAMA ROGERS', 'gh', 'Female', 'hy', 'rogersbyamukama@gmail.com', '+256751736273', '+256751736273', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'ADELLAH TUMURAMYE', 'AT', 'Female', 'BANDA', 'aderatumu@gmail.com', '+256751736273', '+256751736273', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `stafftypes`
--

CREATE TABLE `stafftypes` (
  `stafftypeid` int(11) NOT NULL,
  `typename` varchar(50) DEFAULT NULL,
  `datecreated` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stafftypes`
--

INSERT INTO `stafftypes` (`stafftypeid`, `typename`, `datecreated`, `created_at`, `updated_at`) VALUES
(1, 'Lecturer', '2020-11-25 00:00:00', '2020-11-25 00:00:00', '2020-11-25 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `studentid` int(11) NOT NULL,
  `names` varchar(100) DEFAULT NULL,
  `registrationNumber` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Address` varchar(50) DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  `yearofstudy` int(11) DEFAULT NULL,
  `dateOfBirth` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `timetable`
--

CREATE TABLE `timetable` (
  `timetableid` int(11) NOT NULL,
  `classid` int(11) NOT NULL,
  `dayid` int(11) NOT NULL,
  `sessionid` int(11) NOT NULL,
  `courseunitid` int(11) NOT NULL,
  `lecturerid` int(11) DEFAULT NULL,
  `roomid` int(11) NOT NULL,
  `rowcoladdress` varchar(11) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `staffid` int(11) DEFAULT NULL,
  `password` varchar(65) NOT NULL,
  `email` varchar(100) NOT NULL,
  `picture` varchar(100) DEFAULT NULL,
  `groups_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `staffid`, `password`, `email`, `picture`, `groups_id`) VALUES
(1, 1, '$2a$10$2a4e8803c91cc5edca222evoNPfhdRyGEG9RZcg7.qGqTjuCgXKda', 'sbr@gmail.com', NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allocations`
--
ALTER TABLE `allocations`
  ADD PRIMARY KEY (`allocationid`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`courseid`),
  ADD UNIQUE KEY `coursecode` (`coursecode`);

--
-- Indexes for table `coursetypes`
--
ALTER TABLE `coursetypes`
  ADD PRIMARY KEY (`coursetypeid`),
  ADD UNIQUE KEY `coursetypecode` (`coursetypecode`);

--
-- Indexes for table `days`
--
ALTER TABLE `days`
  ADD PRIMARY KEY (`dayid`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`departmentid`);

--
-- Indexes for table `durations`
--
ALTER TABLE `durations`
  ADD PRIMARY KEY (`durationid`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`facultyid`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `institutions`
--
ALTER TABLE `institutions`
  ADD PRIMARY KEY (`institutionid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `lectureclass`
--
ALTER TABLE `lectureclass`
  ADD PRIMARY KEY (`classid`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_menu_menu1_idx` (`menu_id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`menu_id`,`groups_id`),
  ADD KEY `fk_permissions_groups1_idx` (`groups_id`);

--
-- Indexes for table `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`programid`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`roomid`);

--
-- Indexes for table `roomtypes`
--
ALTER TABLE `roomtypes`
  ADD PRIMARY KEY (`roomtypeid`);

--
-- Indexes for table `ssessions`
--
ALTER TABLE `ssessions`
  ADD PRIMARY KEY (`ssessionid`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staffid`);

--
-- Indexes for table `stafftypes`
--
ALTER TABLE `stafftypes`
  ADD PRIMARY KEY (`stafftypeid`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`studentid`);

--
-- Indexes for table `timetable`
--
ALTER TABLE `timetable`
  ADD PRIMARY KEY (`timetableid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`,`groups_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_user_groups1_idx` (`groups_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allocations`
--
ALTER TABLE `allocations`
  MODIFY `allocationid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `courseid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `coursetypes`
--
ALTER TABLE `coursetypes`
  MODIFY `coursetypeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `days`
--
ALTER TABLE `days`
  MODIFY `dayid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `departmentid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `durations`
--
ALTER TABLE `durations`
  MODIFY `durationid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `facultyid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `institutions`
--
ALTER TABLE `institutions`
  MODIFY `institutionid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `lectureclass`
--
ALTER TABLE `lectureclass`
  MODIFY `classid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `programs`
--
ALTER TABLE `programs`
  MODIFY `programid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `roomid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `roomtypes`
--
ALTER TABLE `roomtypes`
  MODIFY `roomtypeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `ssessions`
--
ALTER TABLE `ssessions`
  MODIFY `ssessionid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `staffid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `stafftypes`
--
ALTER TABLE `stafftypes`
  MODIFY `stafftypeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `studentid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `timetable`
--
ALTER TABLE `timetable`
  MODIFY `timetableid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `fk_menu_menu1` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `permissions`
--
ALTER TABLE `permissions`
  ADD CONSTRAINT `fk_permissions_groups1` FOREIGN KEY (`groups_id`) REFERENCES `groups` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_permissions_menu1` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_groups1` FOREIGN KEY (`groups_id`) REFERENCES `groups` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
