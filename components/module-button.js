import ClipLoader from "react-spinners/ClipLoader";

import styles from '@/styles/Home.module.css';

export const ModuleButton = ({ label, isLoading, ...props }) => {
  return (
    <div className={styles.button} {...props}>
      {isLoading ? (
        <ClipLoader
          size={16}
          color={'#000'}
          cssOverride={{ marginTop: '-5px', marginBottom: '-5px' }}
          loading={isLoading}
        />
      ) : (
        <>{label}</>
      )}
    </div>
  )
}