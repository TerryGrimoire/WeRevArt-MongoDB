import "../style/ContactUs.css";
import axios from "axios";
import { useForm } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies

export default function ContactUsForm() {
  /**
   * register permet d'enregistrer les informations de notre formulaire grâce au code :
   * {...register("Nom-de-variable", { required: true })} dans les input ligne 85/97/108/120
   * { required: true } Permet d'obliger l'utilisateur à rentrer une valeur dans l'input
   */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/sendEmail`, data)
      .then((res) => {
        console.warn("mail was send", res);
      })
      .catch((err) => console.error(err));
    reset();
  };

  return (
    <section className="section_form">
      <form className="form_qb" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact_form_qb">
          <label className="field_label_qb" htmlFor="nameInput">
            Name
            <input
              className="field_input"
              type="text"
              name="nameInput"
              {...register("Name", { required: true })}
            />
            {/* Si le champ n'est pas rempli, on indique à l'utilisateur que ce champ est requis. */}
            {errors.Name?.type === "required" && (
              <p className="contact_required_qb">Name is required</p>
            )}
          </label>
          <label className="field_label_qb" htmlFor="emailInput">
            Email
            <input
              className="field_input"
              type="text"
              name="emailInput"
              {...register("Email", { required: true })}
            />
            {errors.Email?.type === "required" && (
              <p className="contact_required_qb">Email is required</p>
            )}
          </label>
          <label className="field_label_qb" htmlFor="sujetlInput">
            Subject
            <input
              className="field_input"
              type="text"
              name="sujetlInput"
              {...register("Sujet", { required: true })}
            />
            {errors.Sujet?.type === "required" && (
              <p className="contact_required_qb">Sujet is required</p>
            )}
          </label>
        </div>
        <div className="form_message_qb">
          <label className="field_label_qb" htmlFor="messageInput">
            Message
            <textarea
              className="contact_textaera_qb"
              name="messageInput"
              {...register("Message", { required: true })}
            />
            {errors.Message?.type === "required" && (
              <p className="contact_required_qb">Message is required</p>
            )}
          </label>
          <button type="submit" value="send" className="button_form_qb yellow">
            submit
          </button>
        </div>
      </form>
    </section>
  );
}
