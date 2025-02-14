import { useCalendarStore, useUiStore } from '../../hooks';

export const FabDelete = () => {

    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {
        const confirmDelete = window.confirm('¿Estás seguro de eliminar el evento?');
    
        if (confirmDelete) {
            startDeletingEvent();
        }
                    
    
    }


  return (
    <button
        className="btn btn-danger fab-danger"
        onClick={ handleDelete }
        style={{
            display: hasEventSelected ? '': 'none'
        }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
