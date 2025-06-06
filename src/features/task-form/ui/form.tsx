import styled from "styled-components";
import { ButtonUi } from "@/shared/components/buttons";
import { Input } from "@/shared/components/form/input";
import { Select } from "@/shared/components/form/select";
import { Textarea } from "@/shared/components/form/textarea";
import { useTaskForm } from "../hooks/use-task-form";
import type { TaskFormProps } from "../model/types";

export function TaskForm(props: TaskFormProps) {
  const { register, handleSubmit, errors, handleCancel, submitHandler } =
    useTaskForm(props);

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <Input placeholder="Введите заголовок" {...register("title")} />
        {errors.title && <Error>{errors.title.message}</Error>}
      </div>

      <div>
        <Textarea
          placeholder="Введите описание"
          rows={4}
          {...register("description")}
        />
      </div>

      <div>
        <Select {...register("priority")}>
          <option value="">Выберите приоритет</option>
          <option value="low">Низкий</option>
          <option value="medium">Средний</option>
          <option value="high">Высокий</option>
        </Select>
        {errors.priority && <Error>{errors.priority.message}</Error>}
      </div>

      <ButtonsContainer>
        <ButtonUi type="submit" variant="primary">
          {props.mode === "add" ? "Добавить задачу" : "Сохранить изменения"}
        </ButtonUi>
        <ButtonUi variant="secondary" onClick={handleCancel}>
          Отменить
        </ButtonUi>
      </ButtonsContainer>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 1rem;
`;

const Error = styled.span`
  color: ${({ theme }) => theme.colors.errorForeground};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
