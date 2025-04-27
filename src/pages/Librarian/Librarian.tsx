import AddIcon from '@mui/icons-material/Add';
import Label from "../../components/form/Label";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/ui/modal";
import Button from "../../components/ui/button/Button";
import PageMeta from "../../components/common/PageMeta";
import Input from "../../components/form/input/InputField";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import LibrarianComponent from "../../components/librarian/LibrarianComponent";
import CopyrightComponent from '../../components/copyright/CopyrightComponent';

export default function Librarian() {
    const { isOpen, openModal, closeModal } = useModal();
    const handleSave = () => {
        // Handle save logic here
        console.log("Saving changes...");
        closeModal();
    };
    return (
        <>
            <PageMeta
                title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Kitabxanaçılar" />
            <div className="space-y-6">
                {/* <ComponentCard title="Kitabxanaçılar">
            <button>Add</button>
        </ComponentCard> */}
                <div className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] flex justify-between items-center p-5`}>
                    <h4 className="text-base font-medium text-gray-800 dark:text-white/90">Kitabxanaçı əlavə edin</h4>
                    <Button onClick={openModal}>
                        <AddIcon />
                        Əlavə et
                    </Button>
                </div>
                <LibrarianComponent />
                <CopyrightComponent />
            </div>
            <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
                <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
                    <div className="px-2 pr-14">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Yeni kitabxanaçı əlavə edin
                        </h4>
                        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                            Bütün xanaları doldurun!
                        </p>
                    </div>
                    <form className="flex flex-col">
                        <div className="px-2 overflow-y-auto custom-scrollbar">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                <div>
                                    <Label>Ad</Label>
                                    <Input type="text" value="United States" />
                                </div>

                                <div>
                                    <Label>Soyad</Label>
                                    <Input type="text" value="Arizona, United States." />
                                </div>
                                <div>
                                    <Label>Ata adı</Label>
                                    <Input type="text" value="Arizona, United States." />
                                </div>

                                <div>
                                    <Label>Fin kod</Label>
                                    <Input type="text" value="ERT 2489" />
                                </div>

                                <div>
                                    <Label>E-poçt</Label>
                                    <Input type="text" value="AS4568384" />
                                </div>
                                <div>
                                    <Label>Telefon nömrəsi</Label>
                                    <Input type="text" value="AS4568384" />
                                </div>
                                <div>
                                    <Label>İşə başlama tarixi</Label>
                                    <Input type="text" value="AS4568384" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={closeModal}>
                                Bağla
                            </Button>
                            <Button size="sm" onClick={handleSave}>
                                Yadda saxla
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}
