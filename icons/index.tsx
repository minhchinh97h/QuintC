import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faHourglassEnd,
    faClipboardList,
    faStore,
    faChartBar,
    faQuestion,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const BOTTOM_TAB_ICON_SIZE = 19

interface Props {
    size?: number | undefined,
    color?: string | undefined
}

export const CalendarIcon = (props: Props) => <AntDesign name="calendar" size={props.size} color={props.color} />
export const RepeatIcon = (props: Props) => <Feather name="repeat" size={props.size} color={props.color} />

export const CategoryIcon = (props: Props) => <Feather name="list" size={props.size} color={props.color} />

export const PriorityIcon = (props: Props) => <MaterialCommunityIcons name="priority-high" size={props.size} color={props.color} />

export const GoalIcon = (props: Props) => <Feather name="flag" size={props.size} color={props.color} />

export const EndIcon = (props: Props) => (
    <FontAwesomeIcon icon={faHourglassEnd} size={props.size} color={props.color} />
);
export const RewardIcon = (props: Props) => (
    <Feather name="gift" size={props.size} color={props.color} />
);
export const CheckIcon = (props: Props) => (
    <Feather name="check" size={props.size} color={props.color} />
);
export const CloseIcon = (props: Props) => (
    <AntDesign name="close" size={props.size} color={props.color} />
);

export const JournalIcon = (props: Props) => (
    <FontAwesomeIcon icon={faClipboardList} size={props.size} color={props.color} />
);
export const ProgressIcon = (props: Props) => (
    <FontAwesomeIcon icon={faChartBar} size={props.size} color={props.color} />
);
export const RewardScreenIcon = (props: Props) => (
    <FontAwesomeIcon icon={faStore} size={props.size} color={props.color} />
);
export const SettingsIcon = (props: Props) => (
    <Feather name="settings" size={props.size} color={props.color} />
);

export const PlusIcon = (props: Props) => (
    <AntDesign name="plus" size={props.size} color={props.color} />
);

export const QuestionIcon = (props: Props) => (
    <FontAwesomeIcon icon={faQuestion} size={props.size} color={props.color} />
);

export const UserIcon = (props: Props) => (
    <MaterialCommunityIcons name="account" size={props.size} color={props.color} />
);
export const LeftArrowIcon = (props: Props) => (
    <Feather name="arrow-left" size={props.size} color={props.color} />
);

export const LeftChevronIcon = (props: Props) => (
    <FontAwesomeIcon icon={faChevronLeft} size={props.size} color={props.color} />
);
export const RightChevronIcon = (props: Props) => (
    <FontAwesomeIcon icon={faChevronRight} size={props.size} color={props.color} />
);

export const PaperPlaneIcon = (props: Props) => (
    <Entypo name="paper-plane" size={props.size} color={props.color} />
);

export const HomeIcon = (props: Props) => (
    <AntDesign name="home" size={props.size} color={props.color} />
);