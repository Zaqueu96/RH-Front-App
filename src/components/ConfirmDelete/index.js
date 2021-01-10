import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import candidatoApi from "../../services/candidateApi";
export default function ConfirmDelete({ isOpen, handleClose, candidato }) {
  async function deleteCandidato() {
    try {
      await candidatoApi.delete(candidato.id);
      toast.success("Ação realizada com sucesso");
      handleClose();
      document.location.reload();
    } catch (ee) {
      toast.error("Ocorreu um erro ao tentar remover este candidato...");
    }
  }
  return (
    <Dialog open={isOpen} onClose={handleClose} PaperComponent={Paper}>
      <DialogTitle style={{ cursor: "move" }}>Remover Candidato</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Deseja realmente remover o candidato <b>{candidato.nome}</b>?. assim
          que está ação for realizada não poderá ser recuperada novamente.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="secondary">
          Cancelar
        </Button>
        <Button
          onClick={deleteCandidato}
          color="primary"
          endIcon={<DeleteIcon />}
        >
          Confirmar Remoção
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmDelete.propTypes = PropTypes.shape({
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  candidato: PropTypes.object.isRequired,
});
