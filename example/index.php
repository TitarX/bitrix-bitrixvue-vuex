<?php
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("BitrixVue");
?>

<?php
\Bitrix\Main\UI\Extension::load("local.vuex");
?>

<div id="application">Приложение запустится через 1 секунду.</div>
<br>
<div>
    <div>Обновление счетчика из HTML:</div>
    <button onclick="store.dispatch('counterStore/increaseCounter')">+1</button>
    <button onclick="store.dispatch('counterStore/decreaseCounter')">-1</button>
    <button onclick="store.dispatch('counterStore/resetCounter')">My Reset</button>
</div>

<script type="text/javascript">
const application = new BX.VuexDemo('#application');
const store = application.getStore();

setTimeout(() => {
    BX.Dom.clean();
    application.start();
}, 1000)
</script>

<?php require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>