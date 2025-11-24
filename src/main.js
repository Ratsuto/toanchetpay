import 'primeicons/primeicons.css'
import '@/assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

/*Theme*/
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

/*Components*/
import InputText from "primevue/inputtext";
import DataTable from "primevue/datatable";
import Toast from "primevue/toast";
import Select from "primevue/select";
import InputIcon from "primevue/inputicon";
import ConfirmDialog from "primevue/confirmdialog";
import IconField from "primevue/iconfield";
import Dialog from "primevue/dialog";
import DatePicker from "primevue/datepicker";
import Column from "primevue/column";
import Button from "primevue/button";
import Slider from "primevue/slider";
import Textarea from "primevue/textarea";
import InputNumber from "primevue/inputnumber";
import Chart from 'primevue/chart';
import Avatar from 'primevue/avatar';
import ConfirmPopup from 'primevue/confirmpopup';
import Menubar from 'primevue/menubar';
import FileUpload from 'primevue/fileupload';
import Skeleton from 'primevue/skeleton';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';


/*Service*/
import axios from "axios";
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import KeyFilter from 'primevue/keyfilter';

const app = createApp(App);
app.directive('keyfilter', KeyFilter);
app.use(router);
app.use(ToastService);
app.use(ConfirmationService);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue'
            },
            darkModeSelector: '.dark-mode',
        }
    }
});

app.config.globalProperties.$axios = axios;

// Register global components
app.component("InputText", InputText);
app.component("DataTable", DataTable);
app.component("Toast", Toast);
app.component("Select", Select);
app.component("InputIcon", InputIcon);
app.component("ConfirmDialog", ConfirmDialog);
app.component("IconField", IconField);
app.component("Dialog", Dialog);
app.component("DatePicker", DatePicker);
app.component("Column", Column);
app.component("Button", Button);
app.component("Slider", Slider);
app.component("Textarea", Textarea);
app.component("InputNumber", InputNumber);
app.component("Chart", Chart);
app.component("Avatar", Avatar);
app.component("ConfirmPopup", ConfirmPopup);
app.component("Menubar", Menubar);
app.component("FileUpload", FileUpload);
app.component("Skeleton", Skeleton);
app.component("FloatLabel", FloatLabel);
app.component("Tabs", Tabs);
app.component("TabList", TabList);
app.component("Tab", Tab);
app.component("TabPanels", TabPanels);
app.component("TabPanel", TabPanel);
app.component("Password", Password);

app.mount('#app');