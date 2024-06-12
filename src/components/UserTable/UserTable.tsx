import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  Anchor,
  rem,
  TextInput,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const jobColors: Record<string, string> = {
  write: "blue",
  admin: "red",
};

export function UsersTable({ collaborators }: userTableProp) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  const filteredCollaborators = collaborators.filter((collaborator) =>
    collaborator.login.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const rows = filteredCollaborators.map((collaborator) => (
    <Table.Tr key={collaborator.id}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={30} src={collaborator.avatar_url} radius={30} />
          <Text fz="sm" fw={500}>
            {collaborator.login}
          </Text>
        </Group>
      </Table.Td>

      <Table.Td>
        <Badge color={jobColors[collaborator.role_name]} variant="light">
          {collaborator.role_name}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Anchor component="button" size="sm">
          {collaborator.html_url}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{collaborator.type}</Text>
      </Table.Td>
      <Table.Td>
        {/* <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconPencil
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon variant="subtle" color="red">
            <IconTrash
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group> */}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <TextInput
        placeholder="Search"
        size="xs"
        leftSection={
          <IconSearch
            style={{ width: rem(12), height: rem(12) }}
            stroke={1.5}
          />
        }
        styles={{ section: { pointerEvents: "none" } }}
        mb="sm"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>User</Table.Th>
              <Table.Th>Access</Table.Th>
              <Table.Th>Github Profile</Table.Th>
              <Table.Th>Account Type</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </>
  );
}
