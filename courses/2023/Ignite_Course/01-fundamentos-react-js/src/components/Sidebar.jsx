import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from '@phosphor-icons/react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src="https://github.com/italoRAmaral.png" />

        <strong>Italo Amaral</strong>
        <span>Software Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}