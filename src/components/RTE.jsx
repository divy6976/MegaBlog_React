import React from 'react'
import {Editor} from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form'; //react hook form ka use krenge


//chahe toh react forward hook uske krke ref le skte hai but isme react hook form ka use krenge
 export default function RTE({
    name, control, label, defaultValue=""
 }) {
  return (
  
<div className='w-full'>
 {label && <label className='inline-block mb-1 pl-1'>{label}</label>}{/* contorller pura ka pura contorl pass krega khi auur */}
<Controller 
name={name || "content" }
control={control}
 
render={({field: {onChange}})=>(          /* iske andr jo bhi cheez render krana hai jaise isme editor */
<Editor
    
    initialValue={defaultValue}
    init={{
      height: 500,
      menubar: true,
        plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}    
      
        />
)}
/>



</div>




  )
}
