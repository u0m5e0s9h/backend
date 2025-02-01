import { asyncHandler } from "../utils/asyncHandler.js";
import { APIResponse } from "../utils/APIResponse.js";
import { APIError } from "../utils/APIError.js";
import { FAQ } from "../models/faq.js";
import { languages } from "../utils/languages.js";

const getQuestion = asyncHandler(async (req, res) => {
  try {
    const lang = req.query.lang
      ? languages.includes(req.query.lang)
        ? req.query.lang
        : "en"
      : "en";

    let faqs = await FAQ.find();
    if (lang !== "en") {
      faqs = faqs.map((faq) => {
        return { id: faq._id, ...faq.getTranslation(lang) };
      });
    } else {
      faqs = faqs.map((faq) => {
        return { id: faq._id, question: faq.question, answer: faq.answer };
      });
    }

    return res.status(200).json(new APIResponse(200, faqs, ""));
  } catch (error) {
    console.log(error);
    throw new APIError(500);
  }
});

const getOneFAQ = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const lang = req.query.lang || "en";
    const response = await FAQ.findOne({ _id: id });

    if (!response) {
      throw new APIError(404, "FAQ not found");
    }

    if (lang !== "en") {
      return res
        .status(200)
        .json(
          new APIResponse(
            200,
            { _id: id, ...response.getTranslation(lang) },
            ""
          )
        );
    }
    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          { _id: id, question: response.question, answer: response.answer },
          ""
        )
      );
  } catch (error) {
    console.log(error);
    throw new APIError(500);
  }
});

const createFAQ = asyncHandler(async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newFAQ = new FAQ({ question, answer });
    await newFAQ.save();

    return res
      .status(201)
      .json(new APIResponse(200, newFAQ, "FAQ successfully created"));
  } catch (error) {
    console.log(error);
    throw new APIError(500);
  }
});

const updateFAQ = asyncHandler(async (req, res) => {
  try {
    const { id, update } = req.body;
    const response = await FAQ.findOneAndUpdate({ _id: id }, update, {
      new: true,
    });

    if (!response) {
      throw new APIError(404, "FAQ not found");
    }

    return res
      .status(200)
      .json(new APIResponse(200, response, "Successfully updated"));
  } catch (error) {
    console.log(error);
    throw new APIError(500);
  }
});

const deleteFAQ = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    const response = await FAQ.deleteOne({ _id: id });

    if (response.deletedCount === 0) {
      throw new APIError(404, "FAQ not found");
    }

    return res
      .status(200)
      .json(new APIResponse(200, true, "Successfully deleted"));
  } catch (error) {
    console.log(error);
    throw new APIError(500);
  }
});

export { getQuestion, getOneFAQ, createFAQ, updateFAQ, deleteFAQ };
