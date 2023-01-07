import React from "react";
import { Layout, Table, CustomInput, Button } from "../../../components";
import { useAddRecipe } from "../../../features/hook/recipe/useAddRecipe";
import { IoDocumentTextOutline } from "react-icons/io5";
import styles from "./AddRecipe.module.scss";
export const AddRecipe = () => {
  const { recipes, handleSaveRecipes, handleSaveUrl } =
    useAddRecipe();
  // ----------render table---------
  const TABLE_HEADERS = {
    positionName: "Nr.",
    reciptUrl: "Nazwa",
    reciptIngredients: "Składniki",
    delete: "Usuń",
  };
  function handleUrl(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.currentTarget.value);
  }
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <CustomInput
            label={true}
            labelText={"Link do przepisu"}
            inputType="text"
            labelVariant="p"
            placeholder="url"
            name="recipt"
            fnHandleChange={(event) => handleUrl(event)}
          />
          <Button
            text="Zapisz"
            fnHandleClick={handleSaveUrl}
            type="secondary"
          />
        </div>
        <div className={styles.tableWrapper}>
          <Table
            tHeadCollection={TABLE_HEADERS}
            tBodyCollection={recipes}
            text="Dodane przepisy"
            icon={<IoDocumentTextOutline size={25} />}
            fnHandleButtonClick={handleSaveRecipes}
            showButton={true}
            buttonText="Zapisz"
            buttonType="primary"
          />
        </div>
      </div>
    </Layout>
  );
};
