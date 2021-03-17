const ModalCard = ({ item, children }) => {
  const [visible, setVisible] = React.useState(false);
  const changeModalState = () => {
    setVisible(!visible);
  };
  return (
    <TouchableOpacity onPress={changeModalState}>
      {children}
      <Modal
        visible={visible}
        onDismiss={changeModalState}
        contentContainerStyle={styles.modal}
      >
        <Text style={styles.title}>{item.name}</Text>
      </Modal>
    </TouchableOpacity>
  );
};
