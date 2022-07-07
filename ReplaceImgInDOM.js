import React, { useRef } from "react";

const AdMockUp = ({ setAdInformation, adInformation }) => {
  const refProfileImage = useRef(null);
  const {
    profileImage
  } = adInformation;
  return (
          <>
            <input
              type="file"
              accept="image/*"
              id="files"
              onChange={(event) => {
                const target = event.target;
                const file = target.files[0];
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                  const profileImage = reader.result;
                  if (refProfileImage.current) {
                    refProfileImage.current.src = `${profileImage}`;
                  }
                  setAdInformation({ ...adInformation, profileImage });
                });
                reader.readAsDataURL(file);
              }}
            />
            <img
              src={
                profileImage !== ""
                  ? profileImage
                  : "https://via.placeholder.com/50"
              }
              ref={refProfileImage}
              alt="Selected Profile Pic"
            />
          </>
  );
};
export default AdMockUp;
