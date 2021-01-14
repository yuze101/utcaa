import React, { Component } from 'react';
import EventItem from './eventItem';
import events from './events.json';
import './EventList.scss';

class EventList extends Component {
  render() {
    return (
      <div className="eventItems">
        {events.map((eventDetail, index) => {
          return (
            <div className="eventItem" key={index}>
              <EventItem title={eventDetail.title} imgSrc={eventDetail.imgSrc} url={eventDetail.url} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default EventList;

function mergeAppointments(appointments, properties) {
    var array1 = new Array();
    var array2 = new Array();
    var array3 = new Array();
    for (let i=0; i<appointments.length; i++) {
        array1.push(appointments[i].split(","));
    }
    for (let i=0; i<properties.length; i++) {
        array2.push(properties[i].split(","));
    }
    for (let a=0; a<array1.length; a++) {
        for (let b=0; b<array2.length; b++) {
            if (array1[a][2] == array2[b][0]) {
                array3.push(array1[a][0] + "," + array1[a][1] + "," + array2[b][1]);
            }
        }
    }
    return(array3);
}