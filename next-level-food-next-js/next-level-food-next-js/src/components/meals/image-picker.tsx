'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import classes from './image-picker.module.css';

interface ImagePickerProps {
  label: string;
  name: string;
}

export function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    imageInputRef.current?.click();
  }

  function handleRemoveClick() {
    if (!pickedImage) {
      return;
    }
    setPickedImage(null);
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    let file;

    if (event.target.files) {
      file = event.target.files[0];
    }

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.result && typeof fileReader.result === 'string') {
        setPickedImage(fileReader.result);
      }
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="The image selected by the user." fill />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <div className={classes['button-container']}>
          <button
            className={classes['button-picker']}
            type="button"
            onClick={handlePickClick}
          >
            Pick an Image
          </button>

          <button
            className={classes['button-remove']}
            type="button"
            onClick={handleRemoveClick}
            disabled={!Boolean(pickedImage)}
          >
            Remove the Image
          </button>
        </div>
      </div>
    </div>
  );
}
