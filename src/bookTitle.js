import React, {Component, useState} from "react";

export default function BookTitle(props) {
    return (
      <label>
        Title: 
        <input onChange={props.onTitleChange} value={props.title} />
      </label>
    )
  }