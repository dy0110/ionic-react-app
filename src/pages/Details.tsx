import React, { useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/react";
import { camera } from "ionicons/icons";
import { Plugins, CameraResultType } from "@capacitor/core";

const { Camera } = Plugins;

const Details: React.FC = () => {
  const [image, setImage] = useState("");

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    console.log("image", image);

    if (image.webPath === undefined) {
      return ;
    }

    setImage(image.webPath)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={image} alt="image" />
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={takePicture}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Details;
