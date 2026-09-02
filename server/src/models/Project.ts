import mongoose, {
    Document,
    Schema,
} from "mongoose";

export interface IProject extends Document {
    title: string;
    slug: string;
    description: string;
    technologies: string[];
    category: string;
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    year: number;
    features: string[];
    image?: string;
    order: number;
    overview?: string;
    challenges: string[];
    solutions: string[];
    architecture?: string;
    createdAt: Date;
    updatedAt: Date;
    gallery: string[];

}

const projectSchema = new Schema<IProject>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        technologies: {
            type: [String],
            required: true,
            default: [],
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        githubUrl: {
            type: String,
            required: false,
            default: "",
            trim: true,
        },

        liveUrl: {
            type: String,
            required: false,
            default: "",
            trim: true,
        },

        featured: {
            type: Boolean,
            default: false,
        },

        year: {
            type: Number,
            required: true,
        },

        features: {
            type: [String],
            default: [],
        },

        image: {
            type: String,
            default: "",
        },

        order: {
            type: Number,
            default: 0,
        },
        overview: {
            type: String,
            default: "",
        },

        challenges: {
            type: [String],
            default: [],
        },

        solutions: {
            type: [String],
            default: [],
        },

        architecture: {
            type: String,
            default: "",
        },
        gallery: {
  type: [String],
  default: [],
}
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model<IProject>(
    "Project",
    projectSchema
);

export default Project;