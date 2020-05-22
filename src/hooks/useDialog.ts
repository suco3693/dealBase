import { ref } from '@vue/composition-api';

export function useDealDialog() {
    let dialog = ref(false);
    function closeDialog() {
        dialog.value = false;
    }
    function submitDialog() {
        closeDialog();
    }
    function cancelDialog() {
        closeDialog();
    }
    return { dialog, cancelDialog, submitDialog };
}
