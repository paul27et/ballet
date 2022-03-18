import { FaceInterface } from 'interfaces';
import { Component, createSignal, For, splitProps } from 'solid-js';
import { FaceCard } from './FaceCard';
import styles from './FacesTab.module.css';

export const FacesTab: Component<{ faces: Object }> = (props) => {
  const [local] = splitProps(props, ['faces'])
  const [getIsAnyActive, setIsAnyActive] = createSignal(false)

  return (
    <div class={styles.facesTab}>
      <div class={styles.facesContainer}>
        <For each={local.faces as FaceInterface[]}>
          {(face) => (
            <FaceCard image={face.image} name={face.name} job={face.job} getIsAnyActive={getIsAnyActive} setIsAnyActive={setIsAnyActive} />
          )}
        </For>
      </div>
    </div>
  );
};