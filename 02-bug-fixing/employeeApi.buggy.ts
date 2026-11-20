import type { Employee, EmployeeInput } from '../types/employee';

const BASE_URL =
  `${import.meta.env.VITE_API_URL as string}/employees`;

async function handleResponse<T>(
  response: Response
): Promise<T> {
  if (!response.ok) {
    throw new Error(
      `Request failed with status ${response.status}`
    );
  }

  return response.json() as Promise<T>;
}

export function getEmployees(): Promise<Employee[]> {
  return fetch(BASE_URL)
    .then((res) => handleResponse<Employee[]>(res));
}

export function createEmployee(
  data: EmployeeInput
): Promise<Employee> {
  return fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => handleResponse<Employee>(res));
}

export function updateEmployee(
  id: string,
  data: EmployeeInput
): Promise<Employee> {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => handleResponse<Employee>(res));
}

export async function deleteEmployee(
  id: string
): Promise<string> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(
      `Request failed with status ${response.status}`
    );
  }

  return id;
}