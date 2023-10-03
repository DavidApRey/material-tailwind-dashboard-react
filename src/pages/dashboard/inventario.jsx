
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const columns = [
    {
        accessorKey: 'nombre',
        header: 'Nombre',
    },
    {
        accessorKey: 'apellido',
        header: 'Apellido',
    },
    {
        accessorKey: 'permisos',
        header: 'Permisos',
    },
];

const data = [
    {
        nombre: 'David',
        apellido: 'Rey',
        permisos: 'Super Admin'
    },
    {
        nombre: 'Brayan',
        apellido: 'Perez',
        permisos: 'Super Admin'
    },
    {
        nombre: 'Paola',
        apellido: 'Hernandez',
        permisos: 'Super Admin'
    },
];

export function Inventario() {
    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Tabla de Usuarios
                    </Typography>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <div className="p-5">
                        <MaterialReactTable
                            columns={columns}
                            data={data}
                            enableRowActions
                            renderRowActions={({ row, table }) => (
                                <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                                    <IconButton
                                        color="primary"
                                        onClick={() =>
                                            window.open(
                                                `mailto:kevinvandy@mailinator.com?subject=Hello ${row.original.firstName}!`,
                                            )
                                        }
                                    >
                                    </IconButton>
                                    <IconButton
                                        color="secondary"
                                        onClick={() => {
                                            table.setEditingRow(row);
                                        }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => {
                                            data.splice(row.index, 1); //assuming simple data table
                                            setData([...data]);
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            )}
                        />
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default Inventario;
